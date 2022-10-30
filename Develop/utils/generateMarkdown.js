// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
let licenseBadge = ""

if (answers.license === "MIT License") {
  licenseBadge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  return licenseBadge;
}
if (answers.license === "Apache License 2.0") {
  licenseBadge =
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    return licenseBadge;
}
if (answers.license === "Boost Software License 1.0") {
  licenseBadge =
    "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    return licenseBadge;
}
if (answers.license === 'BSD 3-Clause "New" or "Revised" License') {
  licenseBadge =`## License
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    return licenseBadge;
} if (answers.license === 'None') {
  return licenseBadge;
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  if (answers.license === "None") {
    return;
  } else {
    return`* [License](#license)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
${renderLicenseSection(answers)}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributors
${answers.contributing}

## Tests
${answers.tests}

${renderLicenseBadge(answers)}

## Questions
${answers.userName}
${answers.link}
${answers.email}
`;
}

module.exports = generateMarkdown;