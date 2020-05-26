import observable from "./observable.js"

class Listserv extends observable {
    constructor(name) {
        super(name)
        this.subscribers = []
    }

    addSubscriber(observer) {
        this.subscribers.push(observer)
    }
    removeSubscriber(observer) {
        this.subscribers = this.subscribers.filter(element => element != observer)
    }
    notify() {
        this.subscribers.forEach(element => element.update(this))
    }
    getMessage() {
        return this.message
    }
    getName() {
        return this.name
    }
    setMessage(message) {
        this.message = message
    }
}

export default Listserv