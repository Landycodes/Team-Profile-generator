const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, offNum) {
        super(name, id, email)
        this.offNum = offNum
        this.role = 'Manager'
    }
    get OfficeNum() {
        return this.offNum
    }
}
module.exports = Manager