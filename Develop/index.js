// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generateHTML = ({ title, location, github, linkedin }) =>
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
    <h1 class="display-4">${title}</h1>
    <h2>Description</h2>
    <section> ${Description}</section>
    <h2>Table of Contents</h2>
    <section> ${tableOfContents}</section>
    <h2>Installation</h2>
    <section> ${installation}</section>
    <h2>Usage</h2>
    <section> ${usage}</section>
    <h2>License</h2>
    <section> ${license}</section>
    <h2>Contributing</h2>
    <section> ${contributing}</section>
    <h2>Test</h2>
    <section> ${tests}</section>
    <h2>Questions/h2>
    <section> ${questions}</section>

    // <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    // <ul class="list-group">
    //   <li class="list-group-item">My GitHub username is ${github}</li>
    //   <li class="list-group-item">LinkedIn: ${linkedin}</li>
    // </ul>
  </div>
</div>
</body>
</html>`;

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project. Provide a short description explaining the what, why, and how of your project.' 
      //Use the following questions as a guide:   
    //   - What was your motivation?
    //   - Why did you build this project?
    //   - What problem does it solve?
    //   - What did you learn?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
//   .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });

  
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();