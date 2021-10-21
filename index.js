const generateContent = require("./src/generateMarkdown");
const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title for your project?",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
    },
    {
      type: "confirm",
      name: "confirmInstallInstructions",
      message:
        'Would you like to enter some installation instructions?',
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
      message:
        'Would you like to enter some usage instructions?',
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
      name: "confirmContributionGuidelines",
      message:
        'Would you like to enter any contribution guidelines?',
      default: true,
    },
    {
      type: "input",
      name: "contributionGuidelines",
      message: "Provide some information about the usage:",
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
      message:
        'Would you like to enter any contribution guidelines?',
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
};
promptUser().then((data) => {
  console.log(generateContent(data));
});
