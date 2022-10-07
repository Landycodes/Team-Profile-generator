//This will run application
//prompt questions and generate template html file
const inquirer = require('inquirer');
const fs = require('fs');
const renderHtml = require('./src/template');

const questions = [
    {
        type: 'input',
        name: 'Team-manager',
        message: 'Who is the Team Manager?'
    },
    {
        type: 'input',
        name: 'manager-id',
        message: 'What is the Team Managers ID number?'
    },
    {
        type: 'input',
        name: '',
        message: ''
    },
    {
        type: 'input',
        name: '',
        message: ''
    },
    {
        type: 'input',
        name: '',
        message: ''
    },
]

function writeFile(answers) {
    fs.writeFile('index.html', answers, (err) => {
        err ? console.error(err) : console.log('***Your roster has been generated!***')
    })
}

inquirer.prompt(questions)
.then((answers) => {
    writeFile(renderHtml())
    //console.log(`hello my name is ${answers.testQ}`)
}) 

//answers from questions go into there respective class
//ex team manager = new Manager(answers from question in here)
//every time i add and intern/engineer generate a new class
//team manager generates class
// the classes are what will be put into the template