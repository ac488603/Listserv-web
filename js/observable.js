class observable {
    constructor(name) {
        this.name = name
    }

    addSubscriber(observer) {}
    removeSubscriber(observer) {}
    notify() {}
    getMessage() {
        return this.message
    }
    getName() {
        return this.name
    }
}

export default observable;