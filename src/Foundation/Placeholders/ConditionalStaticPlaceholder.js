import React from 'react'
import { withSitecoreContext, Placeholder, getChildPlaceholder } from '@sitecore-jss/sitecore-jss-react'

function ConditionalStaticPlaceholder ({ sitecoreContext, name, ...otherProps }) {
    const disconnectedModel = sitecoreContext.route.layoutId === 'available-in-connected-mode';

    if(!disconnectedModel) {

        let placeholderData = sitecoreContext.navigation.sitecore.route;

        if(sitecoreContext.route) {
            const childPlaceholder = getChildPlaceholder(sitecoreContext.route, name);

            if(childPlaceholder && childPlaceholder.some((rendering) => rendering.componentName)) {
            
                placeholderData = sitecoreContext.route;
            }
        }
        return <Placeholder name={name} rendering={placeholderData} {...otherProps} />;
    }
    return <Placeholder name={name} rendering={sitecoreContext.route} />;
}

export default withSitecoreContext()(ConditionalStaticPlaceholder);