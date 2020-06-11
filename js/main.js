import inputHandler from './inputparsing.js'
import {
    drawTree,
    drawLists
} from './utils.js'

import commandMap from './initCommands.js'


const treeDom = drawTree(commandMap.currRef.current)
document.getElementById('tree').appendChild(treeDom)

drawLists(commandMap.listRef)