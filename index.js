//This will run application
//prompt questions and generate template html file
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { default: Choices } = require('inquirer/lib/objects/choices');
//const renderHtml = require('./src/template');
console.log('i pooped my pants')
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
function writeFile(answers) {
    fs.writeFile('index.html', answers, (err) => {
        err ? console.error(err) : console.log('***Your roster has been generated!***')
    })
}

inquirer.prompt(managerQ)
//const menuPrompt = await inquirer.prompt(menu)
.then((answers) => {
    console.log(answers)
    //console.log(managerQuestions)
    //console.log(menuPrompt)
    
    const renderHtml = require('./src/template');
    writeFile(renderHtml(answers));
})

//answers from questions go into there respective class
//ex team manager = new Manager(answers from question in here)
//every time i add and intern/engineer generate a new class
//team manager generates class
// the classes are what will be put into the template