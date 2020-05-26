import Organization from "../organization.js"
import component from "../component.js"

class changeDirectory {
    constructor(parent, orgs, current) {
        this.root = orgs
        this.currRef = current // this is actuall an object that holds a reference to the current node
        this.parent = parent
    }

    execute(name) {
        if (name == '..') {
            this.currRef.current = this.parent
            if (this.root.getName() == this.parent.getName()) return //check if the root is the parent
            this.parent = this.locateParent(this.root)
            return
        }
        const children = this.currRef.current.getChild()
        const composites = this.getComposites(children)
        for (let element of composites) {
            if (element.getName() == name) {
                this.parent = this.currRef.current
                this.currRef.current = element
                break
            }
        }
    }

    getComposites(children) {
        return children.filter(child => child instanceof Organization)
    }

    locateParent(root) {
        const children = root.getChild()
        const composites = this.getComposites(children) //get organizations

        for (let element of composites) {
            if (element.getName() == this.parent.getName())
                return root
            else
                this.locateParent(element)
        }
    }
}

export default changeDirectory