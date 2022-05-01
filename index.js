// variables
const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const team = [];
const buildTeam = require("./src/generate.js");
const fs = require("fs");



// menu prompt
const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Who would you like to add to your team?",
        choices: ["Add manager" , "Add engineer", "Add intern", "Finished building my team"],
      },
    ])
    .then((userChoice) => {
      if (userChoice.menu === "Add manager") {
        promptMgr();
      }

      if (userChoice.menu === "Add engineer") {
        promptEngineer();
      }
      if (userChoice.menu === "Add intern") {
        promptIntern();
      }
      if (userChoice.menu === "Finished building my team") {
        generateTeam();
      }
    });
};

// manager prompt
const promptMgr = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "employeeEmail",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
      console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.employeeEmail, answers.officeNum);
        team.push(manager); 
      promptMenu();
    });
};


// engineer prompt
const promptEngineer = () => {
  console.log(`
    ****************
    Add new engineer 
    ****************
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineers name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is their employee ID?",
      },
      {
        type: "input",
        name: "employeeEmail",
        message: "What is their employee email?",
      },
      {
        type: "input",
        name: "employeeGit",
        message: "What is the link to their Github?",
      },
    ])
    .then((answers) => {
      console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.employeeEmail, answers.employeeGit);
        team.push(engineer);
      promptMenu();
    });
};

// intern prompt
const promptIntern = () => {
  console.log(`
    **************
    Add new intern 
    **************
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the interns name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is their employee ID?",
      },
      {
        type: "input",
        name: "employeeEmail",
        message: "What is their employee email?",
      },
      {
        type: "input",
        name: "employeeSchool",
        message: "What university do you attend?",
      },
    ])
    .then((answers) => {
      console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.employeeEmail, answers.employeeSchool);
        team.push(intern);
      promptMenu();
    });
};

// generate team 
const generateTeam = () => {
  console.log(`
    **************************
    Completed building my team
    **************************
    `);
    // build team html 
    fs.writeFileSync('test.html', buildTeam(team))
};




// invoke function
promptMgr();
