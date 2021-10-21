const generateContent = require("./src/generateMarkdown");
const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title for your project (Required)",
      validate: (projectTitleInput) => {
        if (projectTitleInput) {
          return true;
        } else {
          console.log("Please enter a title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
      validate: (projectDescInput) => {
        if (projectDescInput) {
          return true;
        } else {
          console.log("Please enter a description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username (Required)",
      validate: (userGithubInput) => {
        if (userGithubInput) {
          return true;
        } else {
          console.log("Please enter your github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address (Required)",
      validate: (userEmailInput) => {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(userEmailInput)) {
          return true;
        } else {
          console.log("Please enter a valid email!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmInstallInstructions",
      message: "Would you like to enter some installation instructions?",
      default: true,
    },
    {
      type: "input",
      name: "installInstructions",
      message: "Provide some information about the installation:",
      when: ({ confirmInstallInstructions }) => {
        if (confirmInstallInstructions) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmUsageInstructions",
      message: "Would you like to enter some usage instructions?",
      default: true,
    },
    {
      type: "input",
      name: "usageInstructions",
      message: "Provide some information about the usage:",
      when: ({ confirmUsageInstructions }) => {
        if (confirmUsageInstructions) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmLicense",
      message: "Do you have a license for the project?",
      default: true,
    },
    {
      type: "list",
      name: "licenseSelect",
      message: "What license do you have?",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        "Boost Software License 1.0",
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'Mozilla Public License 2.0',
        'The Unlicense'
      ],
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmContributionGuidelines",
      message: "Would you like to enter any contribution guidelines?",
      default: true,
    },
    {
      type: "input",
      name: "contributionGuidelines",
      message: "Provide some contribution instructions:",
      when: ({ confirmContributionGuidelines }) => {
        if (confirmContributionGuidelines) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmTestInstructions",
      message: "Would you like to enter any test instructions?",
      default: true,
    },
    {
      type: "input",
      name: "testInstructions",
      message: "Provide some testing instructions:",
      when: ({ confirmTestInstructions }) => {
        if (confirmTestInstructions) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
}
promptUser()
.then((data) => {
  let fileContents = generateContent(data)
  console.log(fileContents);
});
