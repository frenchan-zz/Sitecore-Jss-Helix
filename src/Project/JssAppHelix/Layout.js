import React from 'react';
import { Placeholder, VisitorIdentification, getFieldValue } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';
import ConditionalStaticPlaceholder from '../../Foundation/Placeholders/ConditionalStaticPlaceholder'
// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
//import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.css';

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

const Layout = ({ route }) => (
  <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || route.name}
      </title>

      {getFieldValue(route.fields, 'metaDescription', false) && (
        <meta name='Description' content={route.fields.metaDescription.value.toString()} />
      )}

      {getFieldValue(route.fields, 'noIndex', false) && (
        <meta name="robots" content="noIndex" />
      )}

      {(getFieldValue(route.fields, 'canonical', false) && (
        <link rel="canonical" href={route.fields.canonical.value.toString()} />
      )) || (
        <link rel="canonical" href={window.location.href} />
      )}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
      
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </Helmet>
    {/*
      VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
      If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
      For XM (CMS-only) apps, this should be removed.

      VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
    */}
    <VisitorIdentification />
    <header>
      <ConditionalStaticPlaceholder name="jss-navigation" />
    </header>

    {/* root placeholder for the app, which we add components to using route data */}
    <div className="container">
      <Placeholder name="jss-main" rendering={route} route={route} />
    </div>
    <footer>
      <hr />
      <ConditionalStaticPlaceholder name="jss-footer" />
    </footer>

  </React.Fragment>
);

export default Layout;
