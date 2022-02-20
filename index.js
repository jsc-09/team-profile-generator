const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Team = []

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
        message: 'School',
        name: 'school'
    }
]

async function addManager() {
    const {name, id, email, officeNumber} = await inquirer.prompt (managerQues);
    console.log(name, id, email, officeNumber);
    const manager = new Manager(name, id, email, officeNumber)
    Team.push(manager);
    crossRoads();
}
async function crossRoads() {
    let {choice} = await inquirer.prompt([
            {
                type: 'list',
                message: 'Add a new member',
                name: 'choice',
                choices: [
                    'Engineer', 
                    'Intern' , 
                    'Build Team'
                ]
            }
        ]);
        switch (choice) {           
            case 'Engineer':    
                return addEngineer();
            case 'Intern':    
                return addIntern();
            default: 
                return buildTeam();
        }
    
}
async function addEngineer() {
    
}
async function addIntern() {
    
}

function buildTeam() {

}

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
//init();
addManager();