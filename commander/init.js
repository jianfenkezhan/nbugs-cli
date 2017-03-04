const co = require("co");
const chalk = require("chalk");
const prompt = require("co-prompt");
const ora = require('fs');
const exec = require('child_process');
const config = require('../config.json')

const init = () => {
  co(function* () {
    let templateName = yield prompt('what is your template name? \n')
    let projectName = yield prompt('what is your project name? \n')
    let branchesName = config.branchesName;

    if (!branchesName.includes(templateName)) {
      process.stdout.write(chalk.red(`\n ${templateName} does not exsit, you can choose one of the template listed below` ))
      branchesName.forEach((name, index) => {
        process.stdout.write(chalk.green(`\n ${index + 1}.${name} \n`))
      })
      process.exit(1);
    }

    // if has template on git => support `git` download template
    let git = '';
    fs.exists('./.git', function(exists) {
      if (exists) {
        git = `git clone ${config.templateUrl}${projectName} && git checkout ${templateUrl}`
      } else {
        git = `git init && git clone ${config.templateUrl} ${projectName} && cd ${projectName} && git checkout ${templateName}`
      }

      // 利用 `ora` 打印 loading & log
      let spinner = ora(`is downloading the template for ${templateName}......`)

      // 开始 loading
      spinner.start();
      exec(git, (error, stdout, stderr) => {
        spinner.stop();
        if (error) {
          console.log('what the fuck is ...', error);
          process.exit();
        }
        process.stdout.write(chalk.green('\n $$$ Generation completed! To use step by step as following: '))
        process.stdout.write(chalk.green(`\n 1. cd ${projectName} `))
        process.stdout.write(chalk.green(`\n 2. npm install \n`))
        process.exit(0)
      })
    })
  })
}

module.exports = init