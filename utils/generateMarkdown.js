// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contribution}
## Tests
${data.test}
`;
}

module.exports = generateMarkdown;