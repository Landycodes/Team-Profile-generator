//this is the main class. other classes should extend this one
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        this.role = 'Employee'
    }

    get Name() {
        return this.name
    }

    get ID() {
        return this.id
    }

    get Email() {
        return this.email
    }

    get Role() {
        return this.role
    }

}

module.exports = Employee