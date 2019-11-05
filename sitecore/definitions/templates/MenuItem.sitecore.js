// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addTemplate({
    name: 'MenuItem',
    fields: [
      { name: 'displayName', displayName: 'Display Name', type: CommonFieldTypes.SingleLineText, section: 'Content' },
      { name: 'linkDestination', displayName: 'Link Destination', type: CommonFieldTypes.GeneralLink, section: 'Content'}
    ],
  });
}
