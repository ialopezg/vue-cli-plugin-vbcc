// prompts.js

module.exports = [
    {
        name: `useVueBCCPluginGlobally`,
        type: 'list',
        message: 'Do you want to use VueBCC globally?',
        choices: [
            { name: 'Yes', value: 'yes' },
            { name: 'No', value: 'no' }
        ],
        default: 'yes',
        // UI-related prompt properties
        group: 'Strongly recommended',
        description: 'Adds example pages, layouts and correct router config',
        link: 'https://github.com/ktsn/vue-cli-plugin-vbcc#readme'
    }
]