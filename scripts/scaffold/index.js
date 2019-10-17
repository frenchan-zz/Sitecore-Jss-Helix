const chalk = require('chalk');
const componentScaffolder = require('./componentScaffolder');

console.log("Welcome in Sitecore JSS Helix scaffolder for React components");
componentScaffolder.create();
console.log(chalk.green(`Scaffolding finished.`));
