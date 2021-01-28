const fs = require('fs')
const path = require('path')
const {readFileSync, watchFile } = require('fs')
const cheerio = require('cheerio')
const appFile = path.resolve('./app.xml')
const pretty = require('pretty')

function load() {
    require('dotenv').config()
}

function replaceEnv(content) {
    let context = {}
    context = {...context, ...process.env }
    const matches = content.match(/{{(.*?)}}/g) || []
    matches.map(match => {
        const variable = match.match(/{{(.*)}}/)
        if (context[variable[1]]) {
            content = content.replace(match, context[variable[1]])
        }
    })

    return content
}

function parseDOM(content) {
    return cheerio.load(content,
        {
            xmlMode: true
        }
    )
}

function getContentMain(appFile) {
    const contentMain = fs.readFileSync(appFile, { encoding: 'utf-8' })

    return parseDOM(replaceEnv(contentMain))
}

function writeConfig(configFile, contentMain) {
    fs.writeFileSync(configFile, "module.exports = {\n\txmlConfig: `"+contentMain+"`,\n}", { encoding: 'utf-8' })
}

function parsePath(path) {
    let alias = {
        '~': 'node_modules',
        '@': 'src'
    }
    for (let a in alias) {
        path = path.replace(a, alias[a])
    }
    return path
}

function getModules(contentMain) {
    const modules = contentMain('module[path]')
    const modulesDict = {}
    modules.each(function() {
        const modulePath = parsePath(contentMain(this).attr('path'))
        const moduleXmlFile = path.resolve(modulePath+'/module.xml')
        watchFile(moduleXmlFile, () => {
            appLoop()
        })
        const moduleContent = replaceEnv(readFileSync(moduleXmlFile, { encoding: 'utf-8' }))
        try {
            const moduleTree = parseDOM(moduleContent)
            const moduleName = moduleTree('module').attr('name')
            modulesDict[moduleName] = moduleTree.root()
        } catch(e) {
            console.log(e)
            console.error('Module not loaded', modulePath)
        }
    })

    return modulesDict
}

function iterateModules(contentMain) {
    const modulesContent = getModules(contentMain)
    const modulesMain = contentMain('modules > module, modules > include > module')
    modulesMain.each(function() {
        if (contentMain(this).html()) {
            modulesContent[contentMain(this).attr('name')] = contentMain(this)
        }
    }, modulesContent)

    return modulesContent
}

function parseModules(contentMain) {
    const modules = iterateModules(contentMain)
    Object.keys(modules).forEach(mod => {
        const moduleNode = contentMain(`module[name="${mod}"]`)
        let moduleAppName = moduleNode.attr('app')
        let moduleApiName = moduleNode.attr('api')
        const moduleInclude = moduleNode.parent('include')
        if (moduleInclude) {
            moduleAppName = moduleInclude.attr('app')
            moduleApiName = moduleInclude.attr('api')
        }
        if (moduleAppName) {
            const app = contentMain(`app[name="${moduleAppName}"]`)
            const moduleApp = modules[mod].find('app')
            if (moduleApp.html()) {
                app.append(moduleApp.html())
            }
        }
        if (moduleApiName) {
            const api = contentMain(`api[name="${moduleApiName}"]`)
            const moduleApi = modules[mod].find('api')
            if (moduleApi.html()) {
                api.append(moduleApi.html())
            }
        }
        if (!moduleAppName && !moduleApiName) {
            moduleNode.replaceWith(modules[mod].html())
        }
        moduleNode.remove()
    })
}

function parseAppend(tree) {
    const appendElements = tree('append:not([position])')
    appendElements.each(function() {
        let appendTag = tree(this).attr('tag')
        let appendName = tree(this).attr('name')
        let toAdd = tree(`${appendTag}[name="${appendName}"]`)
        toAdd.append(tree(this).html())
        tree(this).remove()
    })
    const endElements = tree('append[position="end"]')
    endElements.each(function() {
        let appendTag = tree(this).attr('tag')
        let appendName = tree(this).attr('name')
        let toAdd = tree(`${appendTag}[name="${appendName}"]`)
        toAdd.append(tree(this).html())
        tree(this).remove()
    })
}

function parsePrepend(tree) {
    const prependElements = tree('prepend')
    prependElements.each(function() {
        let prependTag = tree(this).attr('tag')
        let prependName = tree(this).attr('name')
        let toPrepend = tree(`${prependTag}[name="${prependName}"]`)
        toPrepend.prepend(tree(this).html())
        tree(this).remove()
    })
}

function parseReplace(tree) {
    tree('replace').each(function() {
        let replaceTag = tree(this).attr('tag')
        let replaceName = tree(this).attr('name')
        let toReplace = tree(`${replaceTag}[name="${replaceName}"]`)
        toReplace.replaceWith(tree(this).html())
        tree(this).remove()
    })
}

function prettifyXML(xmlText) {
    return pretty(xmlText)
}

function appLoop() {
    load()
    const contentMain = getContentMain(appFile)
    parseModules(contentMain)
    parseReplace(contentMain)
    parseAppend(contentMain)
    parsePrepend(contentMain)
    writeConfig(path.resolve('./app.config.js'), prettifyXML(contentMain.html()))
}

module.exports = (api, options, rootOptions) => {
    const utils = require('./utils')(api)
    const { vueBCCPluginImport } = options

    if (api.hasPlugin('vue-bcc')) {
        api.extendPackage({
            dependencies: {
                'vue-bcc': 'file:../vue-bcc',
            },
        })
     }
    if ('vee-validate') {

        api.extendPackage({
            dependencies: {
                'vee-validate': '2.2.15',
            },
        })
    }

    if (vueBCCPluginImport) {
        api.render({
            './src/plugins/vbcc-plugin.js': './template/src/plugins/vbcc-plugin.js',
        })

        api.injectImports(utils.getMainFile(), `import './plugins/vbcc-plugin.js'`)
    }
    api.render({
        './src/App.vue': './template/src/App.vue',
    }, { vueBCCPluginImport })

    watchFile(appFile, () => {
        appLoop()
    })
    appLoop()
}