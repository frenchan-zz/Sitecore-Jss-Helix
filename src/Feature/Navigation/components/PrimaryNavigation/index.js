import * as React from 'react';
import { Link, Text } from '@sitecore-jss/sitecore-jss-react';
import GraphQLData from '../../../../Foundation/GraphQL/GraphQLData';
import gql from 'graphql-tag'

const NavigationQuery = gql`
query  {

    data:item(path: "/sitecore/content/jss-app-helix/content/navigation/primary") {
        id
        name
        children {
            ... on MenuItem {
                hasChildren,
                linkTitle {
                    jss
                },
                linkDestination {
                    jss
                }
                children {
                    ... on MenuItem {
                        hasChildren,
                        linkTitle {
                            jss
                        },
                        linkDestination {
                            jss
                        }
                        children {
                            ... on MenuItem {
                                hasChildren,
                                linkTitle {
                                    jss
                                },
                                linkDestination {
                                    jss
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

const PrimaryNavigation = (props) => {
    const graphQLResult = props.navigationQuery || {};
    const { error, loading } = graphQLResult;
    const { data } = graphQLResult;

    const disconnectedModel = props.sitecoreContext.route.layoutId === 'available-in-connected-mode';

    if(!disconnectedModel) {
        if(error) return(<p className="alert alert-danger">GraphQL query error: {error.toString()}</p>);
        if(!data) return(<p>no data is found</p>);
        if(!loading) {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="row">
                        <div id="navbar" className="navbar-collapse collapse">
                            {
                                data.children &&
                                    BuildNavigation(data.children)
                            }
                        </div>
                    </div>
                </div>
            </nav>
        );}
    }
    return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="row">
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul>
                            {
                                props.fields.links && props.fields.links.map((listItem, index) =>
                                    <li key={`item-${index}`}>
                                        <Link field={listItem.fields.linkDestination} aria-expanded="false">
                                            <Text field={listItem.fields.linkTitle} />
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
                    <Link field={listItem.linkDestination.jss} className={listItem.hasChildren ? 'dropdown-toggle' : ''} data-toggle={listItem.hasChildren ? 'dropdown' : ''} aria-expanded="false">
                        <Text field={listItem.linkTitle.jss} />
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