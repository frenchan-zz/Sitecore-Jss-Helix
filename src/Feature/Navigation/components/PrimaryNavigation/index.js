import * as React from 'react';
import { Link, Text } from '@sitecore-jss/sitecore-jss-react';
import GraphQLData from '../../../../Foundation/GraphQL/GraphQLData';
import gql from 'graphql-tag'

const NavigationQuery = gql`
query ConnectedQuery($datasource: String!) {
    data:datasource(value: $datasource) {
        id
        name
        children {
            ... on MenuItem {
                hasChildren,
                displayName,
                linkDestination {
                    Value
                }
                children {
                    ... on MenuItem {
                        hasChildren,
                        displayName,
                        linkDestination {
                            Value
                        }
                        children {
                            ... on MenuItem {
                                hasChildren,
                                displayName,
                                linkDestination {
                                    Value
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
`;

const PrimaryNavigation = ({fields, navigationQuery, sitecoreContext}) => {
    const queryData = navigationQuery.data || {};
    const {items} = queryData;
    const disconnectedModel = sitecoreContext.route.layoutId === 'available-in-connected-mode';

    if(!disconnectedModel) {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="row">
                        <div id="navbar" className="navbar-collapse collapse">
                            {
                                items.children &&
                                    BuildNavigation(items.children, items.hasChildren)
                            }
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
    return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="row">
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul>
                            {
                                fields.links && fields.links.map((listItem, index) =>
                                    <li key={`item-${index}`}>
                                        <Link field={listItem.fields.linkDestination} aria-expanded="false">
                                            <Text field={listItem.fields.displayName} />
                                        </Link> 
                                    </li>
                                )
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    );

};

function BuildNavigation(items, hasChildren) {
    let className = hasChildren ? 'dropdown-menu' : 'nav navbar-nav';

    return (
        <ul className={className}>
            { 
                items && items.map((listItem, index) =>
                 <li className={listItem.hasChildren ? 'dropdown' : ''} key={`item-${index}`}>
                    <Link field={listItem.linkDestination} className={listItem.hasChildren ? 'dropdown-toggle' : ''} data-toggle={listItem.hasChildren ? 'dropdown' : ''} aria-expanded="false">
                        <Text field={listItem.displayName} />
                    </Link> 
                    {
                        listItem.children && 
                            BuildNavigation(listItem.children, true)
                    }
                 </li>
            )}
        </ul>
    );
}

export default GraphQLData(NavigationQuery, { name: 'navigationQuery' })(PrimaryNavigation);