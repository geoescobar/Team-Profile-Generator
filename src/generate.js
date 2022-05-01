const buildTeam = (genTeam) => {
  const managerArr = [];
  const engineerArr = [];
  const internArr = [];
  const html = [];

  for (i = 0; i < genTeam.length; i++) {
    console.log(genTeam[i].getRole());
    if (genTeam[i].getRole() === "Manager") {
      managerArr.push(genTeam[i]);
    }

    if (genTeam[i].getRole() === "Engineer") {
      engineerArr.push(genTeam[i]);
    }

    if (genTeam[i].getRole() === "Intern") {
      internArr.push(genTeam[i]);
    }
  }
  const buildManager = () => {
    for (i = 0; i < managerArr.length ; i++) {
      let managerCard = `<div class="row">
      <div class="col s6 offset-s3">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text z-depth-4">
            <span class="card-title">${managerArr[i].name}</span>
            <p><i class="fa-solid fa-mug-hot"></i>${managerArr[i].getRole()}</p>
          </div>
          <div class="card-action z-depth-4">
            <p>ID: <a href="#" target="_blank">${managerArr[i].employeeId}</a></p>
          </div>
          <div class="card-action z-depth-4">
            <p>Email: <a href="mailto:${
              managerArr[i].employeeEmail
            }" target="_blank">${managerArr[i].employeeEmail}</a> </p>
          </div>
          <div class="card-action z-depth-4">
            <p>Office Number: <a href="#" target="_blank">${
              managerArr[i].officeNum
            }</a> </p>
          </div>
        </div>
      </div>
    </div>`;
        html.push(managerCard);
    }
  };

  const buildEngineer = () => {
    for (i = 0; i < engineerArr.length; i++) {
      let engineerCard = `<div class="col s6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text z-depth-4">
        <span class="card-title">${engineerArr[i].name}</span>
        <p>${engineerArr[i].getRole()}</p>
      </div>
      <div class="card-action z-depth-4">
       <p>ID:  <a href="#" target="_blank">${engineerArr[i].employeeId}</a></p> 
      </div>
      <div class="card-action z-depth-4">
        <p>Email: <a href="mailto:${
          engineerArr[i].employeeEmail
        }" target="_blank">${engineerArr[i].employeeEmail}</a> </p>
      </div>
      <div class="card-action z-depth-4">
        <p>GitHub: <a href="#" target="_blank">${
          engineerArr[i].employeeGit
        }</a> </p>
      </div>
    </div>
  </div>`;
      html.push(engineerCard);
    }
  };

  const buildIntern = () => {
    for (i = 0; i < internArr.length; i++) {
      let internCard = `<div class="col s6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text z-depth-4">
        <span class="card-title">${internArr[i].name}</span>
        <p>${internArr[i].getRole()}</p>
      </div>
      <div class="card-action z-depth-4">
        <p>ID: <a href="#" target="_blank">${internArr[i].employeeId}</a> </p>
      </div>
      <div class="card-action z-depth-4">
        <p>Email: <a href="mailto:${
          internArr[i].employeeEmail
        }" target="_blank">${internArr[i].employeeEmail}</a> </p>
      </div>
      <div class="card-action z-depth-4">
        <p>School: <a href="#" target="_blank">${
          internArr[i].employeeSchool
        }</a> </p>
      </div>
    </div>
  </div>
`;
      html.push(internCard);
    }
  };

  buildManager();
  buildEngineer();
  buildIntern();

  console.log(html);

  const htmlStr = html.join("");
  const fullHtml = `<!-- html base code -->
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.i" />
      <title>Team Profile Generator</title>
      <!-- materialize cdn -->
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
    </head>
  
  
    <body>
  
        <!-- header  -->
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">Team Profile</a>
        </div>
      </nav>
  
      ${htmlStr}

  <!-- font awesome cdn -->
    <script src="https://use.fontawesome.com/e9219c1b6e.js"></script>
  </body>
</html>

      `;
  console.log(fullHtml);
  return fullHtml;
};


module.exports = buildTeam;
