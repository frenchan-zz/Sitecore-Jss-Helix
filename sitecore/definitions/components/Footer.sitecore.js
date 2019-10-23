// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
/**
 * Adds the Footer component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
    manifest.addComponent({
        name: 'Footer',
        icon: 'Office/32x32/archive_version.png',
        inherits: ['Base-Footer-Settings-Template'],
    });

    manifest.addTemplate({
        name: 'Base-Footer-Settings-Template',
        displayName: '_Base Footer Settings',
        fields: [
            { name: 'copyrightStatement', displayName: 'Copyright Statement', type: CommonFieldTypes.SingleLineText, section: 'Footer settings' },
            { name: 'links', displayName: 'Links', type: CommonFieldTypes.ContentList, section: 'Footer settings' },
            { name: 'termsAndCondition', displayName: 'Terms and Condition', type: CommonFieldTypes.MultiLineText, section: 'Footer settings' },
        ]
    });
}
    