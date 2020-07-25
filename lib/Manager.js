const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
    }

    getRole() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            officeNumber: this.officeNumber,
            role: this.role
        }
    }
}

module.exports = Manager;