import {
    inputWithPath,
    print
} from './utils.js'

import inputHandler from './inputparsing.js'
import orgs from './setupOrganization.js'
import Listserv from './Listserv.js'

// import commands
import Create from './create.js'
import Mkorg from './makeOrganization.js'
import Delete from './delete.js'
import changeDirectory from './commands/changeDirectory.js'
import Notify from './commands/notify.js'
import Subscribe from './commands/subscribe.js'
import Unsubscribe from './commands/unsubscribe.js'
const root = orgs;
const current = {
    current: orgs
};
print.current = current //set property on print function

//initialize listserv
const lists = {
    'csmls': new Listserv('CSMls')
}

//create commands
const createCommand = new Create(current)
const mkorgCommand = new Mkorg(current)
const DeleteCommand = new Delete(current)
const changeDirectoryCommand = new changeDirectory(orgs, orgs, current)
const notifyCommand = new Notify(lists)
const subscribeCommand = new Subscribe(lists, root)
const unsubscribeCommand = new Unsubscribe(lists, root)

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
    'cd': changeDirectoryCommand,
    'notify': notifyCommand,
    'subscribe': subscribeCommand,
    'unsubscribe': unsubscribeCommand
}

commandMap.currRef = current
commandMap.listRef = lists

export default commandMap;