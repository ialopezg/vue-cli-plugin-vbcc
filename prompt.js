module.exports = [
    {
        name: 'preset',
        message: 'Do you want to use Vue-BCC globally?',
        type: 'list',
        choices: [
            { name: 'Yes', value: 'yes' },
            { name: 'No', value: 'no' }
        ],
        default: 'yes'
    }
]
