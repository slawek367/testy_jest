const Person = require('./person');

class Client extends Person {
    constructor(id, name, surrname, age) {
        this.id = id;
        this.name = name;
        this.surrname = surrname;
        this.age = age;
    }

    
}

module.exports = Client