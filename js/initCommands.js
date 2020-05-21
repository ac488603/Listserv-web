import {
    inputWithPath
} from './utils.js'

import inputHandler from './inputparsing.js'
import orgs from './setupOrganization.js'

// import commands
import Create from './create.js'
import Mkorg from './makeOrganization.js'
import Delete from './delete.js'




//create commands
const createCommand = new Create(orgs)
const mkorgCommand = new Mkorg(orgs)
const DeleteCommand = new Delete(orgs)

function clear(parentElement) {
    const children = parentElement.children
    for (let child of [...children]) {
        parentElement.removeChild(child)
    }
    const input = inputWithPath()
    input.addEventListener('keydown', (e) => {
        inputHandler(e, commands)
    })
    commands.appendChild(input)
}

const commandMap = {
    'cd': '',
    'ls': (orgs) => {
        orgs.print()
    },
    'rm': 'remove',
    'new': 'create',
    'clear': clear,
    'create': createCommand,
    'mkorg': mkorgCommand,
    'del': DeleteCommand
}

export default commandMap;