import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  const sectionName = 'Page Metadata';

  manifest.addTemplate({
    name: 'MetaData-Template',
    fields: [
      { name: 'metaDescription', displayName: 'Meta Description', type: CommonFieldTypes.MultiLineText, section: sectionName },
      { name: 'noIndex', displayName: 'No Index', type: CommonFieldTypes.Checkbox, section: sectionName },
      { name: 'canonical', displayName: 'Canonical', type: CommonFieldTypes.SingleLineText, section: sectionName }
    ],
  });
}
  