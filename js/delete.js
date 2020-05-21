class Delete {

    constructor(currentPosition) {
        this.current = currentPosition
    }

    execute(name) {
        const children = this.current.getChild()

        children.forEach(element => {
            if (element.getName() == name) {
                this.current.removeComponent(element)
                element.del()
            }
        });

    }
}

export default Delete