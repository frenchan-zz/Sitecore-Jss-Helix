const fs = require('fs');
const path = require('path');

const sourceDirPath = 'src';
const componentsSourcePath = 'components';

function getImportPath(outputPath) {
    return outputPath.replace(/[\\]/g, '/').replace(sourceDirPath + '/', '');
}

function create(componentName, layerName) {
    const exportVarName = componentName.replace(/[^\w]+/g, '');
    const moduleDirectoryPath = path.join(sourceDirPath, layerName, componentName);
    
    const componentTemplate = `import * as React from 'react';
        import { Text } from '@sitecore-jss/sitecore-jss-react';
        
        const ${exportVarName} = ({ fields }) => (
        <div>
            <p>${componentName} Component</p>
            <Text field={fields.heading} />
        </div>
        );
        export default ${exportVarName};
    `;

    const componentDirPath = path.join(moduleDirectoryPath, componentsSourcePath, componentName);
    console.log(`Creating component: ${componentDirPath}`);
    fs.mkdirSync(moduleDirectoryPath);
    fs.mkdirSync(path.join(moduleDirectoryPath, componentsSourcePath));
    fs.mkdirSync(componentDirPath);
    
    const outputFilePath = path.join(componentDirPath, 'index.js');
    fs.writeFileSync(outputFilePath, componentTemplate, 'utf8');
}

module.exports = { create };