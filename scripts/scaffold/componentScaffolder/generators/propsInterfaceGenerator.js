const fs = require('fs');
const path = require('path');


function create(componentPropsName, componentPropsPath) {
    const fieldsName = componentPropsName + "Fields";
    const template = `
        export default interface ${componentPropsName} {
            fields: ${fieldsName};
        }
        export interface ${fieldsName} {
            heading: FieldValue;
        }
    `;

    const outputFilePath = path.join(componentPropsPath, `/${componentPropsName}.js`);
    console.log(`Creating props interface: ${outputFilePath}`);
    fs.mkdirSync(componentPropsPath);
    fs.writeFileSync(outputFilePath, template, 'utf8');
}

module.exports = { create };