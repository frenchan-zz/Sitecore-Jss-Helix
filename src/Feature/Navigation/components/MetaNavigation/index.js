import * as React from 'react';
import { Link, Text } from '@sitecore-jss/sitecore-jss-react';

const MetaNavigation = ({ fields }) => (   
    <nav id="meta-nav">
        <div className="container">
            <div className="row">
                {
                    fields.links &&
                    <ul className="meta-nav">
                        {
                            fields.links.map((listItem, index) =>
                                <li key={`item-${index}`}>
                                    <Link field={listItem.fields.linkDestination} target={listItem.fields.target}>
                                        <Text field={listItem.fields.linkTitle} />
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                }
            </div>
        </div>
    </nav>
);
export default MetaNavigation;
    