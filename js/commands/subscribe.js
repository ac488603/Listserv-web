import Organization from '../organization.js'
import Student from '../student.js'
import observer from '../observer.js'

class Subscribe {
    constructor(mapOfLists, root) {
        this.lists = mapOfLists
        this.root = root
    }

    execute(commandString) {
        if (commandString.length < 3) return
        const listName = commandString[1].toLowerCase()
        const observerName = commandString[2]
        if (this.lists[listName]) {
            const exists = this.lists[listName]
            if (this.root.getName() == observerName) {
                console.log(`${this.root.getName()} subscribed.`)
                console.log(this.lists)
                if (this.root instanceof Student) exists.addSubscriber(root)
                else this.addChildren(this.root, exists)
                return
            }
            this.findObservers(this.root, exists, observerName)
        }
        console.log(this.lists)
    }

    findObservers(root, list, observerName) {
        const children = root.getChild()
        console.log(children)
        for (const child of children) {
            if (child.getName() == observerName) {
                const isTrue = child instanceof Organization
                if (isTrue) {
                    this.addChildren(child, list)
                } else {
                    list.addSubscriber(child)
                }
                return
            }
        }

        const composites = this.getComposites(children)

        for (let child of composites) {
            this.findObservers(child, list, observerName) // recursive call
        }

    }

    getComposites(children) {
        const composites = []

        children.forEach(child => {
            if (child instanceof Organization) composites.push(child)
        })

        return composites
    }

    getLeaves(children) {
        const leaves = []

        children.forEach(child => {
            if (child instanceof Student) leaves.push(child)
        })

        return leaves
    }

    addChildren(current, list) {
        const children = current.getChild()
        const leaves = this.getLeaves(children)
        const composites = this.getComposites(children)

        leaves.forEach(child => {
            list.addSubscriber(child)
        })

        composites.forEach(organization => {
            this.addChildren(organization, list) //recursive call
        })
    }

}

export default Subscribe