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
print.current = current //set property on print function


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
    'ls': print,
    'clear': clear,
    'create': createCommand,
    'mkorg': mkorgCommand,
    'del': DeleteCommand,
    'cd': changeDirectoryCommand
}

commandMap.currRef = current

export default commandMap;