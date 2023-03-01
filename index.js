// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
{
      type: 'input',
      message: 'Enter Project Title : ',
      name: 'title',
},
{
      type: 'input',
      message: 'Enter Project Description : ',
      name: 'description',
},
{
      type: 'input',
      message: 'Enter Project Installation Instructions : ',
      name: 'installation',
},
{
      type: 'input',
      message: 'Enter Project Usage Information : ',
      name: 'usage',
},
{
	type:'list',
	message:'Select a License : ',
	name : 'license',
	choices : ['Apache License 2.0','GNU General Public License v3.0','MIT License']
},
{
      type: 'input',
      message: 'How to Contribute ? : ',
      name: 'contribute',
},
{
      type: 'input',
      message: 'Enter Tests : ',
      name: 'tests',
},
{
      type: 'input',
      message: 'Enter Github Username : ',
      name: 'username',
},
{
	type:'input',
	message:'Enter Email Address',
	name :'email'
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	
	var data = JSON.parse(data)
	var project_title = '# ' + data.title + '\n\n'
	var description_title = '\n\n ## Description \n'
	var desc = data.description + '\n\n'
	var installation_title = '\n\n ## Installation \n'
	var Instructions = data.installation + '\n\n'
	var usage_title = '## Usage \n'
	var usage = data.usage + '\n\n'
	var contri_title = '\n\n ## How to Contribute \n'
	var contribute = data.contribute + '\n\n'
	var tests_title = '## Tests \n'
	var tests = data.tests + '\n\n'
	var que_title = '## Questions \n'
	var questions = 'https://github.com/'+data.username+'\n\n'
	var license = '## License \n'
	var badge_chosen = data.license
	var email = data.email
	var table = '## Table Of Contents\n\n'


	if (badge_chosen == 'Apache License 2.0')
	{
		var badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
	}
	else if (badge_chosen == 'GNU General Public License v3.0')
	{
		var badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
	}
	else
	{
		var badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
	}


	var logger = fs.createWriteStream(fileName, {
    flags: 'a' 
	})

	logger.write(project_title) 
	
	logger.write(badge)
	
	logger.write(description_title) 
	logger.write(desc)

	logger.write(table)
	logger.write('- [Installation](#installation)\n')
	logger.write('- [Usage](#usage)\n')
	logger.write('- [License](#license)\n')
	logger.write('- [How to Contribute](#how-to-contribute)\n')
	logger.write('- [Tests](#tests)\n')
	logger.write('- [Questions](#questions)\n')

	logger.write(installation_title)
	logger.write(Instructions) 
	
	logger.write(usage_title) 
	logger.write(usage) 
	
	logger.write(license)
	logger.write(badge_chosen)
	
	logger.write(contri_title) 
	logger.write(contribute)
	
	logger.write(tests_title) 
	logger.write(tests)
	
	logger.write(que_title)
	logger.write(questions)
	logger.write("Reach me with additional questions\n")
	logger.write(email)
	
	




}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions)
	.then((response)=>{
		console.log(response);
		writeToFile('README.md',JSON.stringify(response));
	})

}

// Function call to initialize app
init();
