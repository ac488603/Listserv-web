import component from './component.js'
import observable from './observable.js'
import {
    printToScreen
} from './utils.js'

class Student extends component {
    constructor(name) {
        super(name)
    }
    update(observable) {
        const message = observable.geMessage()
        const organization = observable.getName()
        this.subscribed[organization] = message
    }
    print(space = " ") {
        printToScreen(space + this.name)
    }
    del() {

    }
    showRecent() {}
}

export default Student;