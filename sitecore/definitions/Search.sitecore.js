// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
/**
 * Adds the Search template to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
    manifest.addRouteType({
        name: 'Search',
        icon: 'Applications/32x32/document_view.png',
        fields: [
            { name: 'heading', type: CommonFieldTypes.SingleLineText },
        ],
    });
}