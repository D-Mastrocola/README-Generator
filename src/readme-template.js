let generateTableOfContents = (data) => {
  let tableArr = [];
  if (data.confirmInstallInstructions) tableArr.push("Install-Instructions");
  if (data.confirmUsageInstructions) tableArr.push("Usage-Instructions");
  if (data.confirmLicense) tableArr.push("License");
  if (data.confirmContributionGuidelines)
    tableArr.push("Contribution-Guidelines");
  if (data.confirmTestInstructions) tableArr.push("Test-Instructions");

  tableArr.push("Questions");
  if (tableArr.length > 0) {
    return `
## Table of Contents
${tableArr
  .map((tableEl) => {
    return `
* [${tableEl}](#${tableEl.toLowerCase()})
`;
  })
  .join("")}
`;
  }
  return "";
};
let generateInstallInstructions = (data) => {
  if (data.confirmInstallInstructions) {
    return `
## Installation-Instructions
${data.installInstructions}
`;
  }
  return "";
};
let generateUsageInstructions = (data) => {
  if (data.confirmUsageInstructions) {
    return `
## Usage-Instructions
${data.usageInstructions}
    `;
  }
  return "";
};
let generateLicenseBadge = (data) => {
  if (data.confirmLicense) {
    return `
![License](https://img.shields.io/badge/license-${data.licenseSelect}-blue/)
    `;
  }
  return "";
};
let generateLicenseSection = (data) => {
  if (data.confirmLicense) {
    return `
## License
This project is covered under ${data.licenseSelect}
${generateLicenseBadge(data)}
    `;
  }
  return "";
};
let generateContributionGuidelines = (data) => {
  if (data.confirmContributionGuidelines) {
    return `
## Contribution-Guidelines
${data.contributionGuidelines}
    `;
  }
  return "";
};
let generateTestInstructions = (data) => {
  if (data.confirmTestInstructions) {
    return `
## Test-Instructions
${data.testInstructions}
    `;
  }
  return "";
};
let generateQuestionsSection = (data) => {
  return `
## Questions
    
[Github](https://github.com/${data.github})

${data.email}
    
If you have any questions feel free to message me on github or shoot me an email
    `;
};

module.exports = (templateData) => {
  // destructure page data by section

  return `
# ${templateData.title}
${templateData.description}
${generateLicenseBadge(templateData)}
${generateTableOfContents(templateData)}
${generateInstallInstructions(templateData)}
${generateUsageInstructions(templateData)}
${generateLicenseSection(templateData)}
${generateContributionGuidelines(templateData)}
${generateTestInstructions(templateData)}
${generateQuestionsSection(templateData)}
    `;
};
