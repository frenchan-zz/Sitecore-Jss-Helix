// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
/**
 * Adds the RichText component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
    manifest.addComponent({
        name: 'RichText',
        icon: 'Applications/32x32/document_new.png',
        fields: [
            { name: 'richText', displayName: 'Rich Text', type: CommonFieldTypes.RichText, section: 'Content' },
        ]
    });
}
