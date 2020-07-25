const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')

function Team() {
    inquirer
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
        },
        {
            type: 'list',
            name: 'position',
            message: 'What is the work position of this employee?',
            choices: ['Manager', 'Engineer', 'Intern'],

        }

    ])
        .then(({ name, id, email, position }) => {
            if (position === 'Manager') {
                this.employee = new Manager(name);
                this.employee.id = id;
                this.employee.email = email;
                this.employee.role = position;
                inquirer
                .prompt({
                    type: 'number',
                    name: 'officeNumber',
                    message: 'Please enter the office number of this manager.'
                })
                .then(({officeNumber}) => {
                    this.employee.officeNumber = officeNumber
            
                    console.log(this.employee.getRole());}
                )
            }
        })

/*    .then(({ name, id, email, position, officeNumber}) => {
        if (position === 'Manager') {
        this.employee = new Manager(name);
        this.employee.id = id;
        this.employee.email = email;
        this.employee.role = position;
        this.employee.officeNumber = officeNumber

        console.log(this.employee.getRole());}
    })

    /*.then(({ name, id, email }) => {
        this.employee = new Employee(name);
        this.employee.id = id;
        this.employee.email = email;

        console.log(this.employee.getRole());
    })*/
}

Team();