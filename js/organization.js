import component from "./component.js";
import {
    printToScreen
} from './utils.js'

class Organization extends component {

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
    del() {}
}

export default Organization;