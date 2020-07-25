const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email);
        this.school = school;
        this.role = role;
    }

    getRole() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            school: this.school,
            role: this.role
        }
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;