import Organization from './organization.js'

class Mkorg {
    constructor(currentPosition) {
        this.current = currentPosition
    }

    execute(name) {
        this.current.addComponent(new Organization(name))
        return `new organization(${name}) added to ${this.current.getName()} organization.`
    }
}

export default Mkorg