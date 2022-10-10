const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = '👨🏽‍💻 Engineer';
    }
    get GitHub() {
        return this.gitHub
    }

}

module.exports = Engineer;
