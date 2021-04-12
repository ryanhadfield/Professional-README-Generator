const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// User questions to create ReadMe
const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "Please provide a name for your web application:",
    },

    {
      type: "input",
      name: "Description",
      message: "Please provide a description for your web application:",
    },

    {
      type: "input",
      name: "Installation",
      message:
        "Please provide instructions on how to install your web application:",
    },

    {
      type: "input",
      name: "User",
      message: "Please provide a user story for this web application:",
    },

    {
      type: "input",
      name: "credit",
      message:
        "Are there any collaborators or credit you'd like to link to this web application?",
    },

    {
      type: "list",
      name: "License",
      message: "Choose the License info for this web application:",
      choices: [
        "The MIT License",
        "GNU GPL v3",
        "ISC License (ISC)",
        "IBM Public License Version 1.0",
        "Mozilla Public License 2.0",
      ],
    },

    {
      type: "input",
      name: "questions",
      message: "Please provide your email address:",
    },

    {
      type: "input",
      name: "github",
      message: "Enter your github username:",
    },
    {
      type: "input",
      name: "Contribution",
      message:
        "Please add contribution guidelines for your web application if you have any:",
    },

    {
      type: "input",
      name: "test",
      message:
        "Please describe how you would like to have users test your web application:",
    },
  ]);

// ReadMe Layout
const generateReadMe = (answers) =>
  `# ${answers.Title}

## Description 
${answers.Description}

## Table of Contents (Optional)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${answers.Installation}

## Usage 
${answers.User}

## Credits
${answers.credit}

## License
${
  answers.License === "The MIT License"
    ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    : answers.License === "GNU GPL v3"
    ? "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    : answers.License === "ISC License (ISC)"
    ? "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    : answers.License === "IBM Public License Version 1.0"
    ? "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    : "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
}

## Questions
If you have any questions please feel free to email me at:
${answers.questions}

Link to my Github profile:
https://github.com/${answers.github}


## Contributing
${answers.Contribution}

## Tests
${answers.test}

`;

// Generates the ReadMe file and informs the user
promptUser()
  .then((answers) => writeFileAsync("README2.md", generateReadMe(answers)))
  .then(() => console.log("Successfully wrote to README2.md"))
  .catch((err) => console.error(err));
