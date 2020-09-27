const addBadge = licenseChoice => {
  if (licenseChoice == 'Apache License 2.0') {
    return `
![apache](https://img.shields.io/badge/license-Apache%20License%202.0-blue)
    `;
  } else if (licenseChoice == 'GNU GPLv3') {
    return `
![gnu](https://img.shields.io/badge/license-GNU%20GPLv3-green)
    `;
  } else {
    return `
![mit](https://img.shields.io/badge/license-MIT%20License-red)
    `;
  }
}

const checkLicense = licenseChoice => {
  if (licenseChoice == 'Apache License 2.0') {
    return `
This application is covered by the Apache v2.0 License, the terms of which can be found [here](https://www.apache.org/licenses/LICENSE-2.0.txt).
    `;
  } else if (licenseChoice == 'GNU GPLv3') {
    return `
This application is covered by the GNU General Purpose License, the terms of which can be found [here](https://www.gnu.org/licenses/gpl-3.0.en.html).
    `;
  } else {
    return `
This application is covered by the MIT License, the terms of which can be found [here](https://opensource.org/licenses/MIT).
    `;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${addBadge(data.license)}
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
## License
${checkLicense(data.license)}
`;
}

module.exports = generateMarkdown;