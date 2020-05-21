import Student from "./student.js"

class Create {
    constructor(currentPosition) {
        this.current = currentPosition
    }

    execute(name) {
        this.current.addComponent(new Student(name))
        return `new student(${name}) added to ${this.current.getName()} Organization.`
    }
}

export default Create