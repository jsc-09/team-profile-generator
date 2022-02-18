const inquirer = require('inquirer');
const fs = require('fs');
//add markedown js file with functions

async function init() {
    const answers = await inquirer
        .prompt([
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
            {
                type: 'list',
                message: 'Add a new member',
                name: 'member',
                choices: ['Engineer','Intern']

            }
        ])
        if (answers.choices === 'Engineer'){
            console.log(answers.choices);
        } else {
            console.log("select again")
        };
};
init();