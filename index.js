// Creating dependencies for inquirer and database JS file

const inquirer = require('inquirer');
const db = require('./db.js');

// Starting inquirer prompt with choices list

var startingPrompt = () => {
    inquirer.prompt([
        {
            message: "What would you like to do?",
            type: "list",
            name: "toDoList",
            choices: ["View All Employees","Add Employee","Update Employee Role","View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
        }

    ]).then(answers => {
        switch(answers.toDoList) {
            case "View All Employees":
                return viewEmpPrompt();
            case "Add Employee":
                return addEmpPrompt();
            case "Update Employee Role":
                return updateEmpPrompt();
            case "View All Roles":
                return viewRolePrompt();
            case "Add Role":
                return addRolePrompt();
            case "View All Departments":
                return viewDepPrompt();
            case "Add Department":
                return addDepPrompt();
            case "Quit":
                return quitApp();
        }
    });
}

// Functions to view information from employees database from the command line

function viewEmpPrompt() {
    inquirer.prompt([
        {
            message: "View:",
            type: "list",
            name: "table_name",
            choices: [{name: "All Employees", value: "employees"}]
        }
    ]).then(answers => {

        db.showAll(answers.table_name, callStartingPrompt);
    });
}

function viewRolePrompt() {
    inquirer.prompt([
        {
            message: "View:",
            type: "list",
            name: "table_name",
            choices: [{name:"All Roles", value: "roles"}]
        }
    ]).then(answers => {

        db.showAll(answers.table_name, callStartingPrompt);
    });
}

function viewDepPrompt() {
    inquirer.prompt([
        {
            message: "View:",
            type: "list",
            name: "table_name",
            choices: [{name:"All Departments",value: "departments"}]
        }
    ]).then(answers => {

        db.showAll(answers.table_name, callStartingPrompt);
    });
}

// Functions to update information in employees database from the command line

