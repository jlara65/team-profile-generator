const generateManager = function(manager) {
    return `
                 <div class="col-4 mt-4">
                     <div class="card h-100" id="box">
                         <div class="card-title bg-primary text-light rounded-top">
                             <h3 class="ms-2"> ${manager.name}</h3>
                             <div class="m-2"><i class="fa-solid fa-mug-hot fa-xl"></i> <span>Manager</span></div>
                         </div>
                         <div class="card-body">
                             <p>ID: ${manager.id}</p>
                             <p class="email">Email: <a href="mailto:${manager.email}"> ${manager.email}</a></p>
                             <p>Office Number: ${manager.officeNumber}</p>
                         </div>
                     </div>
                 </div>
    `
}

const generateEngineer = function(engineer) {
    return `
                    <div class="col-4 mt-4">
                        <div class="card h-100" id="box">
                            <div class="card-title bg-primary text-light rounded-top">
                                <h3 class="ms-2"> ${engineer.name}</h3>
                                <div class="m-2"><i class="fa-solid fa-glasses fa-xl"></i> <span>Engineer</span></div>
                            </div>
                            <div class="card-body">
                                <p>ID: ${engineer.id}</p>
                                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}t</a></p>
                                <p>GitHub: <a href="https://github.com/${engineer.github}"> ${engineer.github}</a></p>
                            </div>
                        </div>
                    </div>
    `
}

const generateIntern = (intern) => {
    return `
                <div class="col-4 mt-4">
                    <div class="card h-100" id="box">
                        <div class="card-title bg-primary text-light rounded-top">
                            <h3 class="ms-2"> ${intern.name}</h3>
                            <div class="m-2"><i class="fa-solid fa-user-graduate fa-xl"></i> <span>Intern</span></div>
                        </div>
                        <div class="card-body">
                            <p>ID: ${intern.id}</p>
                            <p class="email">Email: <a href="mailto: ${intern.email}"> ${intern.email}</a></p>
                            <p>School: ${intern.school}</p>
                        </div>
                    </div>
                </div>
    `
}

generateHTML = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

const generateTeamPage = (employeeCards) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c64eef0bbb.js" crossorigin="anonymous"></script>
        <title>Team Profile</title>
        <style>
            #box {
      border: 1px solid;
      box-shadow: 5px 5px 5px #888888;
    }
        </style>
    </head>
    <body>
        <header>
            <nav class="navbar bg-danger">
                <span class="fs-1 fw-semibolder w-100 text-center text-light ">My Team</span>
            </nav>
        </header>
        <main class="container d-flex justify-content-evenly">
            <div class="row justify-content-center">
                ${employeeCards}
            </div>
        </main>
        
    </body>
    </html>
    `
};

module.exports = generateHTML;