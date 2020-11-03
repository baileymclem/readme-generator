// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}`;
}

module.exports = generateMarkdown;


// array of questions for user
const questions = ["What is your GitHub username?", "What is your email address?", "What is your project's name?", "Please write a short description of your project", "What kind of license should your project have?", "What command should be run to install dependencies?", "What command should be run to run tests?", "What does the user need to know about using the repo?", "What does the user need to know about contributing to the repo?" ];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();