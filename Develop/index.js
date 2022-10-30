// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

//GIVEN a command-line application that accepts user input
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message:
          "Please describe your project. Provide a short description explaining what was your motovation, why did you build this project, what problem did it solve, and what did you learn?",
      },
      {
        type: "input",
        name: "installation",
        message:
          "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      },
      {
        type: "input",
        name: "usage",
        message:
          "Provide instructions and examples for use. Include screenshots as needed.To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README.",
      },
      {
        type: "input",
        name: "contributing",
        message:
          "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
      },
      {
        type: "input",
        name: "tests",
        message:
          "Write tests for your application. Then provide examples on how to run them here.",
      },
      {
        type: "list",
        name: "license",
        message:
          "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)..",
        choices: [
          "None",
          "Apache License 2.0",
          "MIT License",
          'BSD 3-Clause "New" or "Revised" License',
          "Boost Software License 1.0",
          "Creative Commons Zero v1.0 Universal", 
          "GNU Affero General Public License v3.0",
          "GNU General Public License v2.0",
          "Mozilla Public License 2.0",
        ],
      },
      {
        type: "input",
        name: "userName",
        message: "Please enter your GitHub username.",
      },
      {
        type: "input",
        name: "link",
        message: "List your Github link.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
      },
    ])
    .then((answers) => {
      const markdownPageContent = generateMarkdown(answers);
      fs.writeFile("README.md", markdownPageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md!")
      );
    });
}
// **** Function call to initialize app
init();
