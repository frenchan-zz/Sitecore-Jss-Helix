import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

export default function (manifest) {
  manifest.addComponent({
    name: 'ArticleHeader',
    displayName: 'Article Header',
    icon: SitecoreIcon.DocumentTag,
    fields: [],
  });
}