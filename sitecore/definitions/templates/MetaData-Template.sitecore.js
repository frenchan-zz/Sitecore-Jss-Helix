import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
    const section = 'Page Metadata';

    manifest.addTemplate({
      name: 'MetaData-Template',
      fields: [
        { name: 'metaDescription', displayName: 'Meta Description', type: CommonFieldTypes.MultiLineText, section: section },
        { name: 'noIndex', displayName: 'No Index', type: CommonFieldTypes.Checkbox, section: section},
        { name: 'canonical', displayName: 'Canonical', type: CommonFieldTypes.SingleLineText, section: section }
      ],
    });
  }
  