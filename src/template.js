//creates the manager card using the class created on index.js
function managerCard(managerClass) { 
    return `<div class="card bg-transparent w-25 m-3">
        <div class="card-header bg-primary text-center">
            <h4>${managerClass.Name}</h4>
            <h6 class="card-subtitle mb-2 text-white">${managerClass.Role}</h6>
        </div>
        <div class="card-body rounded-bottom">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID#: ${managerClass.ID}</li>
                <li class="list-group-item">Email: <a href="mailto:${managerClass.Email}">${managerClass.Email}</a></li>
                <li class="list-group-item">Office Number: ${managerClass.OfficeNum}</li>
              </ul>            
        </div>
    </div>`;
}

//creates a card for each intern or engineer that is added to the teamArr on index.js
function teamCards(...teamArr) {
    if(teamArr.length != 0){
        let cards = [];
        let specialPrompt;
        for(let i = 0; i < teamArr.length; i++) {
            if(teamArr[i]['role'] == '👨🏽‍💻 Engineer') {
            specialPrompt = `GitHub: <a href="https://github.com/${teamArr[i]['gitHub']}">${teamArr[i]['gitHub']}</a>`
        } else {
            specialPrompt = 'School: '+ teamArr[i]['school']
        };
        cards.push(`<div class="card bg-transparent w-25 m-3">
        <div class="card-header bg-primary text-center">
          <h4>${teamArr[i]['name']}</h4>
          <h6 class="card-subtitle mb-2 text-white">${teamArr[i]['role']}</h6>
        </div>
        <div class="card-body rounded-bottom">
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID#: ${teamArr[i]['id']}</li>
              <li class="list-group-item">Email: <a href="mailto: ${teamArr[i]['email']}">${teamArr[i]['email']}</a></li>
              <li class="list-group-item">${specialPrompt}</li>
            </ul>            
        </div>
        </div>\n`
    )};
    return cards.join(' ')
    } else {
    return ''
    };
};

//all information that will be written to webage HTML
function renderHtml(managerClass, teamArr) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"> 
        <title>Team Roster</title>
    </head>
    <body>
        <header class="jumbotron-fluid bg-primary text-center display-3 mb-2 text-white">Team</header> 
        <div class="container d-flex flex-wrap justify-content-center">
            <!--Manager card*vvv*-->  
            ${managerCard(managerClass)}
            <!--Engineer/intern cards*vvv*-->
            ${teamCards(...teamArr)}
        </div>
    </body>
    </html>`
}

module.exports = renderHtml;
