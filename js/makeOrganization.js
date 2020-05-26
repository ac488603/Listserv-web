import Organization from './organization.js'

class Mkorg {
    constructor(currentPosition) {
        this.currRef = currentPosition
    }

    execute(name) {
        this.currRef.current.addComponent(new Organization(name))
        return `new organization(${name}) added to ${this.currRef.current.getName()} organization.`
    }
}

export default Mkorg