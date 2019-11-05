const fs = require('fs');
const path = require('path');

const manifestPath = 'sitecore/definitions/';

function create(componentName) {
    const template = `// eslint-disable-next-line no-unused-vars
    import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
    /**
     * Adds the ${componentName} component to the disconnected manifest.
     * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
     * @param {Manifest} manifest Manifest instance to add components to
     */
    export default function(manifest) {
    manifest.addComponent({
        name: '${componentName}',
        icon: SitecoreIcon.DocumentTag,
        fields: [
        { name: 'heading', type: CommonFieldTypes.SingleLineText },
        ],
        /*
        If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
        register it here, or components added to that placeholder will not be returned by Sitecore:
        placeholders: ['exposed-placeholder-name']
        */
    });
    }`;

    return createOutputFile(template, componentName, manifestPath + "components");
}

function createTemplate(templateName) {
    const template = `// eslint-disable-next-line no-unused-vars
    import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
    /**
     * Adds the ${templateName} template to the disconnected manifest.
     * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
     * @param {Manifest} manifest Manifest instance to add components to
     */
    export default function(manifest) {
    manifest.addTemplate({
        name: '${templateName}',
        icon: SitecoreIcon.DocumentTag,
        fields: [
        { name: 'heading', type: CommonFieldTypes.SingleLineText },
        ],
    });
    }`;

    return createOutputFile(template, templateName, path, manifestPath + "templates");
}

function createRoute(routeName) {
    const template = `// eslint-disable-next-line no-unused-vars
    import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
    /**
     * Adds the ${routeName} template to the disconnected manifest.
     * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
     * @param {Manifest} manifest Manifest instance to add components to
     */
    export default function(manifest) {
    manifest.addRouteType({
        name: '${routeName}',
        icon: SitecoreIcon.DocumentTag,
        fields: [
        { name: 'heading', type: CommonFieldTypes.SingleLineText },
        ],
    });
    }`;

    return createOutputFile(template, routeName, manifestPath);
}

function createOutputFile(template, name, path) {
    const outputFilePath = path.join(path, `${name}.sitecore.js`);

    if(fs.existsSync(outputFilePath)) {
        throw `Manifest definition path ${outputFilePath} already exists. Not creating manifest definition.`;
    }
    console.log(`Creating manifest: ${outputFilePath}`);
    fs.writeFileSync(outputFilePath, template, 'utf8');
    return outputFilePath;
}

module.exports = { create, createTemplate, createRoute };