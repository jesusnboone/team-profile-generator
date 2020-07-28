
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { prompt } = require('inquirer');
const fs = require('fs');
let teamData = [];
html1 = 
`<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Our Team</h1>
    <p class="lead"></p>
  </div>
</div>
  <div class="card" style="width: 18rem;">
    <p class="card-text">`
html2 = `</p>
  </div>
</div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>`

const team = () => {

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
        },
        {
            type: 'list',
            name: 'position',
            message: 'What is the work position of this employee?',
            choices: ['Manager', 'Engineer', 'Intern'],

        },

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
                            return team();
                        }
                        else {
                            
                            console.log(JSON.stringify(teamData, null, 2));
                            fs.writeFile(

                                './new-file.html',
                            
                                (html1 + JSON.stringify(teamData, null, 2) + html2),
                            
                                function (err) {
                                    if (err) {
                                        console.error('error');
                                    }
                                }
                            );
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
                            return team();
                        }
                        else {
                            
                            console.log(JSON.stringify(teamData, null, 2));
                            fs.writeFile(

                                './new-file.html',
                            
                                (html1 + JSON.stringify(teamData, null, 2) + html2),
                            
                                function (err) {
                                    if (err) {
                                        console.error('error');
                                    }
                                }
                            );
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
                            return team();
                        }
                        else {
                            
                            console.log(JSON.stringify(teamData, null, 2));
                            fs.writeFile(

                                './new-file.html',
                            
                                (html1 + JSON.stringify(teamData, null, 2) + html2),
                            
                                function (err) {
                                    if (err) {
                                        console.error('error');
                                    }
                                }
                            );
                        }
                    })
                })
            }
        })


}

team();