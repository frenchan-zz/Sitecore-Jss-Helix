import * as React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';

const HeroBanner = ({ fields }) => (
<div className="jumbotron hero-banner">
    <div className="container">
        <h1><Text field={fields.title} /></h1>
        <p><Text field={fields.paragraph} /></p>
        <p>
            <Link field={fields.linkDestination} className="btn-lg btn-primary">
                <Text field={fields.linkText} />
            </Link>
        </p>
    </div>
</div>
);
export default HeroBanner;
    