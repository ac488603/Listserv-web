import inputHandler from './inputparsing.js'
import {
    drawTree
} from './utils.js'

import orgs from './setupOrganization.js'


const treeDom = drawTree(orgs)
document.getElementById('tree').appendChild(treeDom)