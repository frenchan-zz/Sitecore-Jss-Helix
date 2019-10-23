import React from 'react';
import { withSitecoreContext, Text, RichText, DateField } from '@sitecore-jss/sitecore-jss-react';

const ArticleHeader = ({ sitecoreContext: { route: { fields } } }) => {
    return (
        <div>
            <article>
                <h1>
                    <Text field={fields.title} class="" />
                </h1>
                <span>
                    <DateField field={fields.articleDate} render={date => date.toLocaleDateString()} />
                </span>
                <div>
                    <RichText field={fields.mainContent} />
                </div>
            </article>
        </div>
    );
};

export default withSitecoreContext()(ArticleHeader);