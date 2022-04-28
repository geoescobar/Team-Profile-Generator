// variables
const inquirer = require("inquirer");
const Manager = require("./team/manager.js");
const Engineer = require("./team/engineer.js");
const Intern = require("./team/intern.js");
const team = [];
const generate = require("./output/generate.js");
const fs = require("fs");

// manager prompts
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
        name: "mgrId",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "mgrEmail",
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
      //   const mgr = new Manager(answers.name, answers.mgrId, answers.mgrEmail, answers.officeNum);
        team.push(promptMgr);
      promptMenu();
    });
};

// menu prompt
const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Who would you like to add to your team?",
        choices: ["Add engineer", "Add intern", "Finished building my team"],
      },
    ])
    .then((userChoice) => {
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
      //   const engineer = new Engineer(answers.name, answers.employeeId, answers.employeeEmail, answers.employeeGit);
        team.push(promptEngineer);
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
        name: "employeeGit",
        message: "What is the link to their Github?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      //   const intern = new Intern(answers.name, answers.employeeId, answers.employeeEmail, answers.employeeGit);
        team.push(promptIntern);
      promptMenu();
    });
};

const generateTeam = () => {
  console.log(`
    **************************
    Completed building my team
    **************************
    `);
    console.log(team);

};

// invoke function
promptMgr();
