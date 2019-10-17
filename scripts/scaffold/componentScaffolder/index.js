const chalk = require('chalk');
const readline = require('readline-sync');
const componentGenerator = require('./generators/componentGenerator');
const manifestGenerator = require('./generators/manifestGenerator');

const layerOptions = ['Foundation', 'Feature', 'Project'];

function create() {
    const layerName = layerOptions[readline.keyInSelect(layerOptions, "Choose layer:", {cancel: false})];
    const componentName = readline.question(`\nWrite component name: \n`, {limit: null});

    validate(componentName);
    manifestGenerator.create(componentName);
    componentGenerator.create(componentName, layerName);

    console.log(chalk.green(`Component ${componentName} has been scaffolded.`));
}

function validate(componentName) {
    if (!/^[A-Z][A-Za-z0-9-]+$/.test(componentName)) {
        throw 'Name should start with an uppercase letter and contain only letters and numbers.';
    }
}

module.exports = {create};