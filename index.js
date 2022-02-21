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
    const { name, id, email, officeNumber } = await inquirer.prompt(managerQues);
    console.log(name, id, email, officeNumber);
    const manager = new Manager(name, id, email, officeNumber)
    Team.push(manager);
    crossRoads();
}
async function crossRoads() {
    let { choice } = await inquirer.prompt([
        {
            type: 'list',
            message: 'Add a new member',
            name: 'choice',
            choices: [
                'Engineer',
                'Intern',
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
    const { name, id, email, github } = await inquirer.prompt(engineerQues);
    console.log(name, id, email, github);
    const engineer = new Engineer(name, id, email, github);
    Team.push(engineer)
    crossRoads();
}
async function addIntern() {
    const { name, id, email, school } = await inquirer.prompt(internQues);
    console.log(name, id, email, school);
    const intern = new Intern(name, id, email, school);
    Team.push(intern)
    crossRoads();
}

//Add HTML here
function buildTeam() {
    let htmlContent = ''
    htmlContent += `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com" defer></script>
        <script src="index.js" defer></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
        <script src="https://kit.fontawesome.com/fd836be9ea.js" crossorigin="anonymous"></script>
        <title>My Team</title>
    </head>
    
    <body>
        <h1 class="bg-teal-200 text-center pt-5 pb-5">My Team Profile</h1>
        <div class="flex flex-row flex-wrap">
                        `
    for (let i = 0; i < Team.length; i++) {
        htmlContent += Team[i].createCard()
    }
    console.log(htmlContent);

    htmlContent += `
    </div>
                        </body>
                        </html>`
    fs.writeFile('index.html', htmlContent, (err) => err ? console.group(err) : console.log('success')
    );








}

addManager();