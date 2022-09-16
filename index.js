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
        message: 'What is your manager name of this team? ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ('Please enter your manager name!');
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter your manager's ID: ",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your manager's ID! ");
            }
        }      
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your manager's email: ",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your manager's ID! ");
            }
        }      
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter your manager's office number: ",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log("Please enter your manager's office number! ");
            }
        }      
    },

    ])

    .then(managerData => {
        console.log(managerData);
    })
};

promptManager();