const inquirer = require('inquirer');
const Employee = require('./lib/Employee')

function Team() {
    return inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'Please enter the name of an Employee on your team.'
        },
        {
            type: 'number',
            name: 'id',
            message: 'Please enter their Employee id number.'
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter their email address.'
        }

    
    
    ])
    .then(({ name, id, email }) => {
        this.employee = new Employee(name);
        this.employee.id = id;
        this.employee.email = email;

        console.log(this.employee.getRole());
    })
}

Team();