import {
    addCommand
} from './utils.js'
import orgs from './setupOrganization.js'

const commands = document.getElementById('commands');
const input = document.getElementById('input')

const commandMap = {
    'cd': '',
    'ls': (orgs) => {
        orgs.print()
    },
    'rm': 'remove',
    'new': 'create'
}

input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        const text = e.target.value
        const command = text.split(' ')

        if (commandMap[command[0]]) {
            commands.appendChild(addCommand(text))
            e.target.value = ''
            commandMap[command[0]](orgs)
        }
    }

})

commands.appendChild(addCommand())