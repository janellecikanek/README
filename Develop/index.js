// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

function init() {
  const generateHTML = ({
    title,
    description,
    tableOfContents,
    installation,
    usage,
    license,
    contributing,
    tests,
    questions,
    userName,
    link,
    email,
  }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${title}</h1><br></br>
    <h2>Description</h2>
    <section> ${description}</section><br></br>
    <h2>Table of Contents</h2>
    
     <a href="#tableInstallation">Installation</a><br></br>
 <a href=".tableUsage">Usage</a><br></br>
      <a href="tableContributing">Contributing</a><br></br>
     <a href="tableLicense">License</a><br></br>
      <a href="tableTests">Tests</a><br></br>
      <a href="tableQuestions">Questions</a><br></br>
    

    <h2 id=tableInstallation>Installation</h2>
    <section> ${installation}</section><br></br>
    <h2 id=tableUsage>Usage</h2>
    <section> ${usage}</section><br></br>
    <h2 id=tableContributing>Contributing</h2>
    <section> ${contributing}</section><br></br>
    <h2 id=tableLicense>License</h2>
    <section> ${license}</section><br></br>
    <h2 id=tableTests>Tests</h2>
    <section> ${tests}</section><br></br>
    <h2>Questions</h2>
      <p>My GitHub username is ${userName}</p>
      <p>My GitHub link is: ${link}</p>
    <p>Please contact me at ${email} with any additional questions.</p>
  </div>
</div>
</body>
</html>`;

  // GIVEN a command-line application that accepts user input WHEN I am prompted for information about my application repository
  // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

  // WHEN I enter my project title THEN this is displayed as the title of the README
  // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

  // WHEN I choose a license for my application from a list of options
  // **THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  //
  //WHEN I enter my GitHub username THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  // WHEN I enter my email address THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

  // WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README

  // // TODO: Create an array of questions for user input const questions = [];
  //   *** TODO: Create a function to initialize app

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
          "Provide instructions and examples for use. Include screenshots as needed.To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README",
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
        type: "checkbox",
        name: "license",
        message:
          "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)..",
        choices: [
          "None",
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          'BSD 2-Clause "Simplified" License',
          'BSD 3-Clause "New" or "Revised" License',
          "Boost Software License 1.0",
          "Creative Commons Zero v1.0 Universal",
          "Eclipse Public License 2.0",
          "GNU Affero General Public License v3.0",
          "GNU General Public License v2.0",
          "GNU Lesser General Public License v2.1",
          "Mozilla Public License 2.0",
          "The Unlicense",
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

    //***** */ TODO: Create a function to write README file - function writeToFile(fileName, data) {}

    .then((answers) => {
      const htmlPageContent = generateHTML(answers);

      fs.writeFile("index.html", htmlPageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created index.html!")
      );
    });
}
// **** Function call to initialize app
init();
