// prompts.js

module.exports = [
    {
        name: 'vueBCCPluginImport',
        type: 'list',
        message: 'How do you want to import vue-bcc dependency?',
        choices: [
            { name: 'Globally', value: 'globally' },
            { name: 'On demand', value: 'demanded' }
        ],
        default: 'globally',
    }
]