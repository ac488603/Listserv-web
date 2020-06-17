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
}

function refresh(display, text, path = '') {
    const oldCommand = display.querySelector('.active input').value
    const command = addCommand(oldCommand, path)
    const inputContainer = document.querySelector('.input-container.active')
    display.insertBefore(command, inputContainer)
    const spanResponseMessage = document.createElement('div')
    spanResponseMessage.textContent = text
    display.insertBefore(spanResponseMessage, inputContainer)
    display.querySelector('.active input').value = ''
}

function print() {
    console.log(print.current)
    print.current.current.print()
}

function drawTree(tree, level) {

    if (tree.children) {
        const ulElement = document.createElement('ul')
        const lhElement = document.createElement('lh')
        lhElement.textContent = tree.getName()
        ulElement.appendChild(lhElement)
        ulElement.setAttribute('level', level)
        const listElements = tree.children.map(element => drawTree(element, level + 1)) //recursive call
        ulElement.append(...listElements)
        return ulElement
    }

    const listElement = document.createElement('li')
    listElement.textContent = tree.getName()
    const divElement = document.createElement('div')
    for (let key of Object.keys(tree.subscribed)) {
        const liElement = document.createElement('li')
        liElement.textContent = `${key} - ${tree.subscribed[key]} `
        divElement.appendChild(liElement)
    }
    listElement.appendChild(divElement)
    return listElement
}

function drawLists(lists) {
    const keys = Object.keys(lists)

    function constructDOMList(name, message) {
        const nameElement = document.querySelector(`#${name}`)
        if (nameElement) {
            if (message !== undefined && nameElement.lastChild.textContent !== message) {
                const li = document.createElement('li')
                li.textContent = message
                nameElement.appendChild(li)
            }
        } else {
            const listElement = document.createElement('ul')
            const listheadElement = document.createElement('lh')
            listheadElement.textContent = name
            listElement.appendChild(listheadElement)
            if (message !== undefined) {
                const li = document.createElement('li')
                li.textContent = message
                listElement.appendChild(li)
            }
            listElement.setAttribute('id', `${name}`)
            document.querySelector('#lists').appendChild(listElement)
        }

    }

    for (let key of keys) {
        const list = lists[key]
        const name = list.getName()
        const message = list.getMessage()
        constructDOMList(name, message)
    }
}

export {
    addCommand,
    printToScreen,
    inputWithPath,
    refresh,
    print,
    drawTree,
    drawLists
};