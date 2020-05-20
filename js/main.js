import {
    addCommand,
    inputWithPath
} from './utils.js'
import orgs from './setupOrganization.js'

const commands = document.getElementById('commands');
commands.appendChild(inputWithPath())

const input = document.getElementById('input')
const path = document.getElementById('path')

function inputHandler(e) {
    if (e.keyCode == 13) {
        const text = e.target.value
        const commandString = text.split(' ')

        const requestedCommand = commandMap[commandString[0]];

        switch (commandString[0]) {
            case 'ls':
                commands.insertBefore(addCommand(text), document.querySelector('.input-container.active'))
                e.target.value = ''
                requestedCommand(orgs)
                break;
            case 'clear':
                requestedCommand(commands)
                break;
            default:
                console.log('no command found')
        }
    }
}

const commandMap = {
    'cd': '',
    'ls': (orgs) => {
        orgs.print()
    },
    'rm': 'remove',
    'new': 'create',
    'clear': function clear(element) {
        const children = element.children
        for (let child of [...children]) {
            commands.removeChild(child)
        }
        const input = inputWithPath()
        input.addEventListener('keydown', inputHandler)
        commands.appendChild(input)
    }
}

input.addEventListener('keydown', inputHandler)