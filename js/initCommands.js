import {
    inputWithPath,
    print
} from './utils.js'

import inputHandler from './inputparsing.js'
import orgs from './setupOrganization.js'

// import commands
import Create from './create.js'
import Mkorg from './makeOrganization.js'
import Delete from './delete.js'
import changeDirectory from './commands/changeDirectory.js'

const current = {
    current: orgs
};
print.current = current


//create commands
const createCommand = new Create(current)
const mkorgCommand = new Mkorg(current)
const DeleteCommand = new Delete(current)
const changeDirectoryCommand = new changeDirectory(orgs, orgs, current)

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
    'ls': print,
    'rm': 'remove',
    'new': 'create',
    'clear': clear,
    'create': createCommand,
    'mkorg': mkorgCommand,
    'del': DeleteCommand,
    'cd': changeDirectoryCommand
}

export default commandMap;