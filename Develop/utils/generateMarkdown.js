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
}
if (answers.license === 'GNU Affero General Public License v3.0') {
  licenseBadge =`## License
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    return licenseBadge;
} 
if (answers.license === 'GNU General Public License v2.0') {
  licenseBadge =`## License
[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    return licenseBadge;
} 
if (answers.license === 'Mozilla Public License 2.0') {
  licenseBadge =`## License
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    return licenseBadge;
} 
if (answers.license === 'Creative Commons Zero v1.0 Universal') {
  licenseBadge =`## License
[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    return licenseBadge;
} 
if (answers.license === 'None') {
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
  return `# ${answers.title} ${renderLicenseBadge(answers)}  

## Description
${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

${renderLicenseSection(answers)}
## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${renderLicenseBadge(answers)}

## Contributors
${answers.contributing}

## Tests
${answers.tests}

## Questions
My GitHub username is ${answers.userName}.

My GitHub link is ${answers.link}.  

Please contact me at ${answers.email} with any additional questions. 

`;
}

module.exports = generateMarkdown;