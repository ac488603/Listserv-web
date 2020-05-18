import observer from './observer.js';
class component extends observer {
    constructor(name) {
        super(name)
        this.name = name
    }
    print(spaces = " ") {}
    del() {}
}

export default component;