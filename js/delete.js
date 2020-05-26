class Delete {

    constructor(currentPosition) {
        this.currRef = currentPosition
    }

    execute(name) {
        const children = this.currRef.current.getChild()
        const deleted = []
        children.forEach(element => {
            if (element.getName() == name) {
                this.currRef.current.removeComponent(element)
                const name = element.del()
                deleted.push(name)
            }
        });
        return deleted.length > 0 ? deleted.join(', ') + ' deleted' : ''
    }
}

export default Delete