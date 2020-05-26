import Student from "./student.js"

class Create {
    constructor(currentPosition) {
        this.currRef = currentPosition
    }

    execute(name) {
        this.currRef.current.addComponent(new Student(name))
        return `new student(${name}) added to ${this.currRef.current.getName()} Organization.`
    }
}

export default Create