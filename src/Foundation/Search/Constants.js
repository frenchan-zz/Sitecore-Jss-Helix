import packageJson from '../../../package.json';

export const SEARCH_SOURCE = `/sitecore/content/${
    packageJson.config.appName
}/home*`;

export const ARTICLES_SOURCE = `/sitecore/content/${
    packageJson.config.appName
}/home/articles*`;