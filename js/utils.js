function addCommand(text = '', path = '') {
    const divContainer = document.createElement('div')
    const spanSystemText = document.createElement('span')
    const textNode = document.createTextNode('Castillo@Listserv:')
    spanSystemText.appendChild(textNode)
    spanSystemText.className = 'green-text'
    divContainer.appendChild(spanSystemText)
    const spanPathText = document.createElement('pre')
    const textPath = document.createTextNode(`~/${path}$ `)
    spanPathText.appendChild(textPath)
    spanPathText.className = 'blue-text'
    divContainer.appendChild(spanPathText)
    const spanCommand = document.createElement('span')
    const textCommand = document.createTextNode(text)
    spanCommand.appendChild(textCommand)
    divContainer.appendChild(spanCommand)
    divContainer.setAttribute('class', 'input-container')
    return divContainer
}

function inputWithPath(text = '', path = '') {
    const pathElement = addCommand(text, path)
    pathElement.className = 'input-container active'
    const input = document.createElement('input')
    input.setAttribute('id', 'input')
    input.setAttribute('autocomplete', 'off')
    pathElement.appendChild(input)
    return pathElement
}

function printToScreen(text) {
    const commands = document.getElementById('commands');
    const textDiv = document.createElement('pre')
    const textNode = document.createTextNode(text)
    const inputContainer = document.querySelector('.input-container.active')
    textDiv.appendChild(textNode)
    commands.insertBefore(textDiv, inputContainer)
    commands.scrollTop = commands.scrollHeight //scroll element to the bottom
}

export {
    addCommand,
    printToScreen,
    inputWithPath
};