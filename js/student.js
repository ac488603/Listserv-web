import component from './component.js'
import observable from './observable.js'
import {
    printToScreen
} from './utils.js'
import observer from './observer.js'

class Student extends observer {
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
        const name = this.getName()
        delete this
        return name
    }
    showRecent() {}
}

export default Student;