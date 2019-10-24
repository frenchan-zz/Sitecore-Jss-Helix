// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../package.json';
/**
 * Adds the MetaNavigation component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
    manifest.addComponent({
        name: 'MetaNavigation',
        displayName: 'Meta Navigation',
        icon: SitecoreIcon.DocumentTag,
        fields: [
            { name: 'links', displayName: 'Links', type: CommonFieldTypes.ContentList, source: `dataSource=/sitecore/content/${
                packageJson.config.appName
              }/Content/Navigation/Meta` }
        ],

    });
}
