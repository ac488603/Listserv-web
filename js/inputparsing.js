import {
    addCommand,
    inputWithPath,
    refresh
} from './utils.js'

import commandMap from './initCommands.js'

const commands = document.getElementById('commands');
commands.appendChild(inputWithPath('', commandMap.currRef.current.getName())) //initialize input field
const input = document.getElementById('input')
input.addEventListener('keydown', (e) => {
    inputHandler(e, commands)
})
input.focus()

function inputHandler(e, display) {
    if (e.keyCode == 13) {
        const text = e.target.value
        const commandString = text.split(' ')

        const command = commandString[0].toLowerCase()
        const requestedCommand = commandMap[command];
        switch (command) {
            case 'ls':
                display.insertBefore(addCommand(text, commandMap.currRef.current.getName()), document.querySelector('.input-container.active'))
                e.target.value = ''
                requestedCommand() //recursive print call on data structure
                break;
            case 'clear':
                requestedCommand(display) // clears screen
                display.querySelector('input').focus()
                break;
            case 'create':
            case 'mkorg':
            case 'del':
            case 'cd':
                const path = commandMap.currRef.current.getName()
                const statusMessage = requestedCommand.execute(commandString[1])
                refresh(display, statusMessage, path)
                break;
            default:
                console.log('no command found')
        }
        document.querySelector('.input-container.active pre').textContent = `~/${commandMap.currRef.current.getName()}$` // update path on active input
        display.scrollTop = display.scrollHeight //scroll element to the bottom
    }

}


export default inputHandler