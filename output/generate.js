const buildTeam = (genTeam) => {
const managerArr = [];
const engineerArr = [];
const internArr = [];
const html = [];


for (i=0; i<genTeam.length; i++) {
if (genTeam[i].getRole() === 'Manager') {
managerArr.push(genTeam[i])
}

if (genTeam[i].getRole() === 'Engineer') {
  engineerArr.push(genTeam[i])
}

if (genTeam[i].getRole() === 'Intern') {
  internArr.push(genTeam[i])
}
}
  const buildManager = (managerArr) => {
  let card =  `<div class="row">
  <div class="col s6 offset-s3">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text z-depth-4">
        <span class="card-title">${managerArr[0].name}</span>
        <p><i class="fa-solid fa-mug-hot"></i>${managerArr[0].getRole()}</p>
      </div>
      <div class="card-action z-depth-4">
        <p>ID: <a href="#" target="_blank">${managerArr[0].employeeId}</a></p>
      </div>
      <div class="card-action z-depth-4">
        <p>Email: <a href="mailto:#" target="_blank">${managerArr[0].employeeEmail}</a> </p>
      </div>
      <div class="card-action z-depth-4">
        <p>Office Number: <a href="#" target="_blank">${managerArr[0].officeNum}</a> </p>
      </div>
    </div>
  </div>
</div>`
html.push(card);
}

const buildEngineer = () => {
  for (i=0; i < engineerArr.length; i++) {
    let card = `<div class="col s6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text z-depth-4">
        <span class="card-title">${engineerArr[i].name}</span>
        <p>${engineerArr[i].getRole()}</p>
      </div>
      <div class="card-action z-depth-4">
       <p>ID:  <a href="#" target="_blank">${engineerArr[i].employeeId}</a></p> 
      </div>
      <div class="card-action z-depth-4">
        <p>Email: <a href="mailto:#" target="_blank">${engineerArr[i].employeeEmail}</a> </p>
      </div>
      <div class="card-action z-depth-4">
        <p>GitHub: <a href="#" target="_blank">${engineerArr[i].employeeGit}</a> </p>
      </div>
    </div>
  </div>`
  html.push(card);
  }
}

const buildIntern = () => {
  for (i=0; i< internArr.length; i++) {
    let card = `<div class="col s6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text z-depth-4">
        <span class="card-title">${internArr[i].name}</span>
        <p>${internArr[i].getRole()}</p>
      </div>
      <div class="card-action z-depth-4">
        <p>ID: <a href="#" target="_blank">${internArr[i].employeeId}</a> </p>
      </div>
      <div class="card-action z-depth-4">
        <p>Email: <a href="mailto:#" target="_blank">${internArr[i].employeeEmail}</a> </p>
      </div>
      <div class="card-action z-depth-4">
        <p>School: <a href="#" target="_blank">${internArr[i].employeeSchool}</a> </p>
      </div>
    </div>
  </div>
`
html.push(card);
  }
}

buildManager();
buildEngineer();
buildIntern();

console.log(html);
}

module.exports = buildTeam;


