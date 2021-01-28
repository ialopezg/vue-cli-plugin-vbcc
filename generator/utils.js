const fs = require('fs')

module.exports = api => {
    return {
        getMainFile: () => {
            const tsPath = api.resolve('src/main.ts')

            return `src/main.${fs.existsSync(tsPath) ? 't' : 'j'}s`
        }
    }
}