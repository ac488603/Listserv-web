const commands = document.getElementById('commands');
const input = document.getElementById('input')

function addCommand(text = '', path = '') {
    const divSystem = document.createElement('div')
    const textNode = document.createTextNode('Castillo@Listserv:')
    divSystem.appendChild(textNode)
    divSystem.className = 'green-text'
    const spanPath = document.createElement('span')
    const textPath = document.createTextNode(`~/${path}$ `)
    spanPath.appendChild(textPath)
    spanPath.className = 'blue-text'
    divSystem.appendChild(spanPath)
    spanCommand = document.createElement('span')
    textCommand = document.createTextNode(text)
    spanCommand.appendChild(textCommand)
    spanPath.appendChild(spanCommand)
    return divSystem
}

const commandMap = {
    'cd': 'change directory',
    'ls': 'list',
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
        }
    }

})

commands.appendChild(addCommand())