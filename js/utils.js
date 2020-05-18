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
    const spanCommand = document.createElement('span')
    const textCommand = document.createTextNode(text)
    spanCommand.appendChild(textCommand)
    spanPath.appendChild(spanCommand)
    return divSystem
}

function printToScreen(text) {
    console.log(text)
    const commands = document.getElementById('commands');
    const textDiv = document.createElement('pre')
    const textNode = document.createTextNode(text)
    textDiv.appendChild(textNode)
    commands.appendChild(textDiv)
}
export {
    addCommand,
    printToScreen
};