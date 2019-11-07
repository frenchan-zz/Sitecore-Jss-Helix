import * as React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';

const Footer = ({fields}) => {    
    return (
        <div className="container">
            {
                fields.copyrightStatement &&
                <div className="row ftr-copyright">
                    <Text field={fields.copyrightStatement} />
                </div>
            }
            {
                fields.links &&
                <div className="row">
                    <ul className="ftr-links">
                        { fields.links.map((listItem, index) =>
                            <li key={`item-${index}`}>
                                <Link field={listItem.fields.linkDestination} className="nav-link">
                                    <Text field={listItem.fields.linkTitle} />
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            }
            {
                fields.termsAndCondition &&
                <div className="row ftr-tandc"><Text field={fields.termsAndCondition} /></div>
            }
        </div>
    );
};
export default Footer;
    