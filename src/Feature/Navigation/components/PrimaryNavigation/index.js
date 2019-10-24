import * as React from 'react';
import { Link, Text } from '@sitecore-jss/sitecore-jss-react';

const PrimaryNavigation = (props) => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="row">
                    <div id="navbar" className="navbar-collapse collapse">
                        {
                            props.fields.links &&
                                buildNavigation(props.fields.links)
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

function buildNavigation(items, hasChildren) {
    let className = hasChildren ? 'dropdown-menu' : 'nav navbar-nav';

    return (
        <ul className={className}>
            { 
                items && items.map((listItem, index) =>
                 <li className={listItem.fields.items ? 'dropdown' : ''} key={`item-${index}`}>
                     <Link field={listItem.fields.linkDestination} className={listItem.fields.items ? 'dropdown-toggle' : ''} data-toggle={listItem.fields.items ? 'dropdown' : ''} aria-expanded="false">
                        <Text field={listItem.fields.displayName} />
                    </Link> 
                    {
                        listItem.fields.items && 
                            buildNavigation(listItem.fields.items, true)
                    }
                 </li>
            )}
        </ul>
    );
}

export default PrimaryNavigation;