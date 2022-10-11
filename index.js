//This will run application
//prompt questions and generate template html file
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const fs = require('fs');
//const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const renderHtml = require('./src/template');
let teamArr = [];

const managerQ = [
    {
        type: 'input',
        name: 'TeamManager',
        message: 'Who is the Team Manager?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the Team Managers ID number?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the Team Managers E-mail?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Team Managers office number'
    }
]

const menu = [
    {
        type: 'list',
        name: 'menu',
        message: 'Who would you like to bring aboard?',
        choices: ['Engineer', 'Intern', 'I\'m done, make my webpage! ']
    }
]

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
]

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
]

function writeFile(answers) {
    fs.writeFile('index.html', answers, (err) => {
        err ? console.error(err) : console.log('***Your roster has been generated!***')
    })
}

let managerClass
prompt(managerQ)
.then((data) => {
    managerClass = new Manager(data.TeamManager, data.managerId, data.managerEmail, data.officeNumber)
//console.log(managerClass)
    //teamArr.push(managerClass)
    init()
  return managerClass
  //console.log(managerClass.name) THIS GOES INTO TEMPLATE
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
            })
        } else if(data.menu === 'Intern') {
            prompt(internQ)
            .then((data) => {
                let internClass = new Intern(data.intName, data.intId, data.intEmail, data.intSchool)
                teamArr.push(internClass)
            init()
            })
        } else {
        writeFile(renderHtml(managerClass, teamArr)) 
        
        }
    });
};
//init()
//answers from questions go into there respective class
//ex team manager = new Manager(answers from question in here)
//every time i add and intern/engineer generate a new class
//team manager generates class
// the classes are what will be put into the template