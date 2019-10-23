// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Article component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addRouteType({
    name: 'Article',
    displayName: 'Article',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', displayName: 'Title', type: CommonFieldTypes.SingleLineText },
      { name: 'articleDate', displayName: 'Date', type: CommonFieldTypes.Date, standardValue: '$now' },
      { name: 'mainContent', displayName: 'Main Content', type: CommonFieldTypes.RichText }
    ]
  });
}
