let generateTableOfContents = (data) => {
  let tableArr = [];
  if (data.confirmInstallInstructions) tableArr.push("Install Instructions");
  if (data.confirmUsageInstructions) tableArr.push("Usage Instructions");
  if (data.contributionGuidelines) tableArr.push("Contribution Guidelines");
  if (data.confirmTestInstructions) tableArr.push("Test Instructions");

  console.log(tableArr);

  if (tableArr.length > 0) {
    return `
    ## Table of Contents
    ${tableArr.map((tableEl) => {
      console.log(tableEl);
      console.log("* [" + tableEl + "](#" + tableEl.toLowerCase() + ")");
      return "* [" + tableEl + "](#" + tableEl.toLowerCase() + ")";
    })}
    `;
  }
  return ``;
};
let generateInstallInstructions = (data) => {
  if (data.confirmInstallInstructions) {
    return `
    ## Installation Instructions
    ${data.installInstructions}
    `;
  }
  return "";
};
let generateUsageInstructions = (data) => {
  if (data.confirmUsageInstructions) {
    return `
    ## Usage Instructions
    ${data.usageInstructions}
    `;
  }
  return "";
};
let generateContributionGuidelines = (data) => {
  if (data.confirmContributionGuidelines) {
    return `
    ## Contribution Guidelines
    ${data.contributionGuidelines}
    `;
  }
  return "";
};
let generateTestInstructions = (data) => {
  if (data.confirmTestInstructions) {
    return `
    ## Test Instructions
    ${data.testInstructions}
    `;
  }
  return "";
};

module.exports = (templateData) => {
  console.log(templateData);
  // destructure page data by section
  const { title, description } = templateData;

  return `
    # ${title}
    ${description}
    ${generateTableOfContents(templateData)}
    ${generateInstallInstructions(templateData)}
    ${generateUsageInstructions(templateData)}
    ${generateContributionGuidelines(templateData)}
    ${generateTestInstructions(templateData)}
    `;
};
