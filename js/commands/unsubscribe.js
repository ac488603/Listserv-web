import Organization from '../organization.js'
import Student from '../student.js'
import observer from '../observer.js'


class Unsubscribe {

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
                console.log(`${this.root.getName()} unsubscribed.`)
                if (this.root instanceof Student) exists.removeSubscriber(root)
                else this.removeChildren(this.root, exists)
                return
            }
            this.findObservers(this.root, exists, observerName)
        }
        console.log(this.lists)
    }



    findObservers(root, list, observerName) {
        const children = root.getChild()
        for (const child of children) {
            if (child.getName() == observerName) {
                if (child instanceof Organization) {
                    this.removeChildren(child, list)
                } else {
                    list.removeSubscriber(child)
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

    removeChildren(current, list) {
        const children = current.getChild()
        const leaves = this.getLeaves(children)
        const composites = this.getComposites(children)

        leaves.forEach(child => {
            list.removeSubscriber(child)
        })

        composites.forEach(organization => {
            this.removeChildren(organization, list) //recursive call
        })
    }

}

export default Unsubscribe