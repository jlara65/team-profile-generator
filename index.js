const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// add inquirer prompt questions here

const promptManager = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'Hello Manager, please enter your name? ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter your ID: ',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter your ID! ');
                return false;
            }
        }      
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email: ',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your ID! ');
                return false;
            }
        }      
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office number: ',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter your office number! ');
                return false;
            }
        }      
    },

    ])

    .then(managerData => {
        console.log(managerData);
    })
};

const promptEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Enter your employee's role? ",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the name of the employee: ",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the employee! ");
                    return false;
                }
            }      
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the ID of the employee: ",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Please enter the ID of the employee! ");
                    return false;
                }
            }      
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the email of the employee: ",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter the email of the employee! ");
                    return false;
                }
            }      
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the GitHub username of the employee: ",
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log("Please enter the GitHub username of the employee! ");
                    return false;
                }
            }      
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the name of intern's school: ",
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the name of school! ");
                    return false;
                }
            }      
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another team member? ',
            default: false
        }
    ])
    .then(employeeData => {
        if (employeeData.confirmAddEmployee) {
            return promptEmployee();
        } else {
        console.log(employeeData);
        }
    })
};


promptEmployee();