// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
/**
 * Adds the HeroBanner component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
    manifest.addComponent({
        name: 'HeroBanner',
        displayName: 'Hero Banner',
        icon: 'Apps/32x32/Pictures.png',
        inherits: ['Base-Hero-Banner-Template']
    });

    manifest.addTemplate({
        name: 'Base-Hero-Banner-Template',
        displayName: '_Base Hero Banner',
        fields: [
            { name: 'title', displayName: 'Title', type: CommonFieldTypes.SingleLineText, section: 'Content' },
            { name: 'paragraph', displayName: 'Paragraph', type: CommonFieldTypes.MultiLineText, section: 'Content' },
            { name: 'linkText', displayName: 'Link Text', type: CommonFieldTypes.SingleLineText, section: 'Content' },
            { name: 'linkDestination', displayName: 'Link Description', type: CommonFieldTypes.GeneralLink, section: 'Content' },
            { name: 'bannerImage', displayName: 'Banner Image', type: CommonFieldTypes.Image, section: 'Media' }
        ]
      });
}
    