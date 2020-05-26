class Notify {
    constructor(mapOfListserv) {
        this.listServRepository = mapOfListserv
    }

    execute(listWithMessage) {
        if (listWithMessage.length < 3) {
            return 'missing argument(s) list message'
        }

        let list = listWithMessage[1].toLowerCase()
        const message = listWithMessage.splice(2).join(' ')
        list = this.listServRepository[list]
        if (list) {
            const date = new Date()
            list.setMessage(`${date} ${message}`)
            list.notify()
            console.log(list)
            return `${list.getName()} notified.`
        }

    }
}

export default Notify