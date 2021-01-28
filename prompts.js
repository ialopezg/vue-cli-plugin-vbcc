// prompts.js

module.exports = [
    {
        name: 'vueBCCPluginUpdate',
        type: 'confirm',
        message: 'Do you want check and install latest version of vue-bcc plugin?',
        default: 'false',
    },
    {
        name: 'vueBCCPluginImport',
        type: 'list',
        message: 'How do you want to import vue-bcc dependency?',
        choices: [
            { name: 'Globally', value: 'globally' },
            { name: 'On demand', value: 'demanded' }
        ],
        default: 'globally',
    },
]