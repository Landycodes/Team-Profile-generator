//this should create html text and generate html file

const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

// const guy1 = new Employee('bob', '69', 'boob@gmail.com')
// const guy2 = new Manager('bob', '69', 'boob@gmail.com', '12')
// const guy3 = new Engineer('bob', '69', 'boob@gmail.com', 'pussmag')
// const guy4 = new Intern('bob', '69', 'boob@gmail.com', 'cienega')

// console.log(guy1, guy2, guy3, guy4)

// console.log(guy3.GitHub)

function renderHtml() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style> * {font-family: 'roboto', sans-serif;}</style>
    
        <title>Team Roster</title>
    </head>
    <body>
        <header class="jumbotron-fluid bg-primary text-center display-3 mb-2">Team</header> 
        <div class="container d-flex flex-wrap justify-content-center">
            <!--card-->       
            <div class="card bg-light w-25 m-3">
                <div class="card-header bg-primary text-center">
                    <h4>Name</h4>
                    <h6 class="card-subtitle mb-2 text-white">Position</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: #</li>
                        <li class="list-group-item">Email: <a href="mailto:EMAIL HERE">EMAIL HERE</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/GITHUB HERE"></a>GITHUB HERE</li>
                      </ul>            
                </div>
            </div>
        </div>
    </body>
    </html>`
}
module.exports = renderHtml;