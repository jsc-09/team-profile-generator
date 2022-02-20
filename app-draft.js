const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));


const fs = require('fs');
const { clear } = require('console');
//add markedown js file with functions

const managerQues = [
    {
        type: 'input',
        message: 'Team Manager Name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'ID Number',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Email',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Office Number',
        name: 'officeNumber'
    },
]
const engineerQues = [
    {
        type: 'input',
        message: 'Name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'ID Number',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Email',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Git Hub',
        name: 'github'
    }
]
const internQues = [
    {
        type: 'input',
        message: 'Name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'ID Number',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Email',
        name: 'email'
    },
    {
        type: 'input',
        message: 'College',
        name: 'college'
    }
]

async function init() {
    const answers = await inquirer
        .prompt (managerQues)
    while (true) {
    let newMember = await inquirer
        .prompt([
            {
                type: 'list',
                message: 'Add a new member',
                name: 'member',
                choices: ['Engineer', 'Intern']
            }
        ]);
        if (newMember.member === 'Engineer') {
            let engineer = await inquirer
                .prompt(engineerQues)
        } else {
            let intern = await inquirer
                .prompt(internQues)
        };
        let endQues = await inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'Do you want to add another member',
                name: 'continue'
            },
        ]);
        if (endQues.continue == false)
        break;

    }
};
init();