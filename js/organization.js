import component from "./component.js";
import {
    printToScreen
} from './utils.js'
import observable from "./observable.js";

class Organization extends observable {

    constructor(name) {
        super(name)
        this.children = []
    }
    getChild() {
        return this.children
    }
    addComponent(obj) {
        this.children.push(obj)
    }
    removeComponent(obj) {
        this.children = this.children.filter(element => element != obj)
    }
    update(observable) {
        this.children.forEach(element => element.update(observable))
    }
    print(spaces = "") {
        printToScreen(spaces + this.name)
        this.children.forEach(element => {
            element.print(spaces + spaces + " ")
        })

    }
    del() {
        for (let child of this.children) {
            child.del()
        }
        delete this
    }
}

export default Organization;