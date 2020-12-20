const inquirer = require("inquirer");
var fs = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {

  var license = "";

  switch (data.license) {
    case "MIT":
      license =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Boost":
      license =
        "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "Creative Commons":
      license =
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Apache 2.0":
      license =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "ISC":
      license =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
  }

  return `

# ${data.title}

${license}

Table of contents
=================

<!--ts-->
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contributing](#contribution-guidelines)
   * [Tests](#tests)
   * [Questions](#question)
<!--te-->


## Description

${data.description}


## Installation

${data.install}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions, Comments, Issues

Email me at- [${data.email}](${data.email})
Or visit my Github profile- ${data.username}
`;
}


// array of questions for user

const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is a description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the installation requirements?",
    name: "install",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "test",
  },
  {
    type: "list",
    message: "What kind of license should your project have",
    name: "license",
    choices: ["MIT", "Boost", "Apache 2.0", "Creative Commons", "ISC"],
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contributing",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    console.log(response);
    writeToFile("README.md", generateMarkdown(response));
    //switch operator
  });
}

// function call to initialize program
init();
