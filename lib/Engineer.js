const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email);
        this.github = github;
        this.role = role;
    }

    getRole() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            github: this.github,
            role: this.role
        }
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;