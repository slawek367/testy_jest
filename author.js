const Person = require('./person');

class Author extends Person {
    constructor(name, surrname){
        super(name, surrname)
    }
}

module.exports = Author