
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { prompt } = require('inquirer');
let teamData = [];
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
                this.employee = new Manager(name, id, email)
                this.employee.role = position;
                inquirer
                .prompt({
                    type: 'number',
                    name: 'officeNumber',
                    message: 'Please enter the office number of this manager.'
                })
                .then(({officeNumber}) => {
                    this.employee.officeNumber = officeNumber
                    
                    teamData.push(this.employee);
                    console.log(teamData);
                    inquirer
                    prompt({
                        type: 'confirm',
                        name: 'confirmNewEmployee',
                        message: 'Would you like to add another Employee to your team?',
                        default: true
                    })
                    .then(({confirmNewEmployee}) => {
                        if (confirmNewEmployee === true) {
                            return Team();
                        }
                    })
                })
            }
            if (position === 'Engineer') {
                this.employee = new Engineer(name, id, email);
                this.employee.role = position;
                inquirer
                .prompt({
                    type: 'text',
                    name: 'github',
                    message: 'Please enter the github username of this engineer.'
                })
                .then(({github}) => {
                    this.employee.github = github
            
                    teamData.push(this.employee);
                    console.log(teamData);
                    inquirer
                    prompt({
                        type: 'confirm',
                        name: 'confirmNewEmployee',
                        message: 'Would you like to add another Employee to your team?',
                        default: true
                    })
                    .then(({confirmNewEmployee}) => {
                        if (confirmNewEmployee === true) {
                            return Team();
                        }
                    })
                })
            }
            if (position === 'Intern') {
                this.employee = new Intern(name, id, email);
                this.employee.role = position;
                inquirer
                .prompt({
                    type: 'text',
                    name: 'school',
                    message: 'Please enter the school this intern is attending.'
                })
                .then(({school}) => {
                    this.employee.school = school
                    teamData.push(this.employee);
                    console.log(teamData);
                    inquirer
                    prompt({
                        type: 'confirm',
                        name: 'confirmNewEmployee',
                        message: 'Would you like to add another Employee to your team?',
                        default: true
                    })
                    .then(({confirmNewEmployee}) => {
                        if (confirmNewEmployee === true) {
                            return Team();
                        }
                    })
                })
            }
        })


}

Team();