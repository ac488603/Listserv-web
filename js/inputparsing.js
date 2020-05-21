import {
    addCommand,
    inputWithPath,
    refresh
} from './utils.js'

import orgs from './setupOrganization.js'
import commandMap from './initCommands.js'

const commands = document.getElementById('commands');
commands.appendChild(inputWithPath()) //initialize input field
const input = document.getElementById('input')
input.addEventListener('keydown', (e) => {
    inputHandler(e, commands)
})




function inputHandler(e, display) {
    if (e.keyCode == 13) {
        const text = e.target.value
        const commandString = text.split(' ')

        const command = commandString[0].toLowerCase()
        const requestedCommand = commandMap[command];
        switch (command) {
            case 'ls':
                display.insertBefore(addCommand(text), document.querySelector('.input-container.active'))
                e.target.value = ''
                requestedCommand(orgs) //recursive print call on data structure
                break;
            case 'clear':
                requestedCommand(display) // clears screen
                break;
            case 'create':
            case 'mkorg':
            case 'del':
                const statusMessage = requestedCommand.execute(commandString[1] || 'Default')
                refresh(display, statusMessage)
                break;
            default:
                console.log('no command found')
        }
    }

}


export default inputHandler