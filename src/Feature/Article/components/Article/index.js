import React from 'react';
import { Text, RichText, DateField } from '@sitecore-jss/sitecore-jss-react';

const Article = ({fields}) => {
    return (
        <div>
            <article>
                <h1>
                    <Text field={fields.title} class="" />
                </h1>
                <span>
                    <DateField field={fields.articleDate} />
                </span>
                <div>
                    <RichText field={fields.mainContent} />
                </div>
            </article>
        </div>
    );
};

export default Article;