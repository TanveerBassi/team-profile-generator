const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const userQuestions = [
  {
    name: "teamName",
    type: "input",
    message: "What is the name of your team roster?",
  },
  {
    name: "fileName",
    type: "input",
    message: "What do you want to name your HTML file?",
  },
];

const managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter the managers name.",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the team managers ID.",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the team managers email.",
  },
  {
    name: "officeNum",
    type: "input",
    message: "Please enter the team manager's Office Number.",
  },
];

const decisionQuestions = [
  {
    name: "employeeRole",
    type: "list",
    message:
      "What would you like to do next? (choose another team member to add or quit)",
    choices: [
      { key: "Software Engineer", value: "software engineer" },
      { key: "Intern", value: "intern" },
      { key: "Quit the Application", value: "quit" },
    ],
  },
];
const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter the Engineers name.",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the Engineers ID.",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the Engineers email.",
  },
  {
    name: "github",
    type: "input",
    message: "Please enter the Engineers Github Username.",
  },
];

const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter the Interns name.",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the Interns ID.",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the Interns email.",
  },
  {
    name: "school",
    type: "input",
    message: "Please enter the Interns school.",
  },
];

// work on index.js after lunch
// then utils folder
// see if matches then get help from Riz after
