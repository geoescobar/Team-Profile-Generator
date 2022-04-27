// variables 
const inquirer = require('inquirer');
const Manager = require('./team/manager.js');
const Engineer = require('./team/engineer.js');
const Intern = require('./team/intern.js');
const team = [];
const generate = require('./output/generate.js'); 
const fs = require('fs');


// manager prompts 
const promptMgr = () => {
    rerutrn.inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        }, {
            type: 'input',
            name: 'mgrId',
            message: 'What is your employee ID?'
        }, {
            type: 'input',
            name: 'mgrEmail',
            message: 'What is your email?'
        }, {
            type: 'input',
            name: 'officeNum',
            message: 'What is your office number?'
        }
    ])
   
    
}
