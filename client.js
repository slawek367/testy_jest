const Person = require('./person');

class Client extends Person {
    constructor(id, name, surrname) {
        super(name, surrname)
        this.id = id
    }
}

module.exports = Client