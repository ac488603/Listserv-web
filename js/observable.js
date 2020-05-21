import component from "./component.js";

class observable extends component {
    constructor(name) {
        super(name)
    }

    addSubscriber(observer) {}
    removeSubscriber(observer) {}
    notify() {}
    getMessage() {
        return this.message
    }
}

export default observable;