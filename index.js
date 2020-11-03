const inquirer = require("inquirer");
var fs = require('fs');


// function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.username}`;
}

//module.exports = generateMarkdown;



// // array of questions for user
// const questions = ["What is your GitHub username?", "What is your email address?", "What is your project's name?", "Please write a short description of your project", "What kind of license should your project have?", "What command should be run to install dependencies?", "What command should be run to run tests?", "What does the user need to know about using the repo?", "What does the user need to know about contributing to the repo?" ];

const questions = [
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "confirm"
    },
    {
        type: "list",
        message: "What kind of license should your project have",
        name: "license",
        choices: ["MIT", "Boost", "Apacje 2.0", "Creative Commons"]
    }
  ]

// function to write README file
function writeToFile(fileName, data) {


    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }

        console.log("Success!");

      });
}

// function to initialize program
function init() {
    inquirer
  .prompt(questions)
  .then(function(response) {
    console.log(response);
    writeToFile("README.md", generateMarkdown(response));

  });
}

// function call to initialize program
init();