//This will run application
//prompt questions and generate template html file
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const renderHtml = require('./src/template');
let teamArr = [];
let managerClass;

const managerQ = [
    {
        type: 'input',
        name: 'TeamManager',
        message: 'Who is the Team Manager?',
        validate: (answer) => answer ? true : console.log('Manager input is needed')
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the Team Managers ID number?',
        validate: (answer) => answer ? true : console.log('Manager input is needed')

    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the Team Managers E-mail?',
        validate: (answer) => answer ? true : console.log('Manager input is needed')

    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Team Managers office number',
        validate: (answer) => answer ? true : console.log('Manager input is needed')
    }
];

const menu = [
    {
        type: 'list',
        name: 'menu',
        message: 'Who would you like to bring aboard?',
        choices: ['Engineer', 'Intern', 'I\'m done, make my webpage! ']
    }
];

const engineerQ = [
    {
        type: 'input',
        name: 'engName',
        message: 'Please enter the name of your Engineer'
    },
    {
        type: 'input',
        name: 'engId',
        message: 'Enter Engineer ID number'

    },
    {
        type: 'input',
        name: 'engEmail',
        message: 'Enter Engineer E-mail'

    },
    {
        type: 'input',
        name: 'engHub',
        message: 'Enter Engineer GitHub username'

    }
];

const internQ = [
    {
        type: 'input',
        name: 'intName',
        message: 'Please enter Interns name'
    },
    {
        type: 'input',
        name: 'intId',
        message: 'Enter Intern ID number'
    },
    {
        type: 'input',
        name: 'intEmail',
        message: 'Enter Intern Email'
    },
    {
        type: 'input',
        name: 'intSchool',
        message: 'What school is Intern attending?'
    }
];

function writeFile(answers) {
    fs.writeFile('./dist/index.html', answers, (err) => {
        err ? console.error(err) : console.log('***Your webpage has been generated!***')
    });
};

console.log('\n***Team Profile Generator***')
prompt(managerQ)
.then((data) => {
    managerClass = new Manager(data.TeamManager, data.managerId, data.managerEmail, data.officeNumber)
    init();
    return managerClass;
})
function init() {
    prompt(menu)
    .then((data) => {
        if(data.menu === 'Engineer') {
            prompt(engineerQ)
            .then((data) => {
                let engineerClass = new Engineer(data.engName, data.engId, data.engEmail, data.engHub)
                teamArr.push(engineerClass)
                init()
            });
        } else if(data.menu === 'Intern') {
            prompt(internQ)
            .then((data) => {
                let internClass = new Intern(data.intName, data.intId, data.intEmail, data.intSchool)
                teamArr.push(internClass)
                init()
            });
        } else {
            writeFile(renderHtml(managerClass, teamArr)) 
        };
    });
};
