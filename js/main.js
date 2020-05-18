const commands = document.getElementById('commands');

function addCommand(text) {
    const spanSystem = document.createElement('span')
    const textNode = document.createTextNode('Castillo@Listserv:')
    spanSystem.appendChild(textNode)
    spanSystem.className = 'green-text'
    const spanPath = document.createElement('span')
    const textPath = document.createTextNode('~/$')
    spanPath.appendChild(textPath)
    spanPath.className = 'blue-text'
    spanSystem.appendChild(spanPath)
    return spanSystem
}

commands.appendChild(addCommand('castillo@Listserv:~/$'))