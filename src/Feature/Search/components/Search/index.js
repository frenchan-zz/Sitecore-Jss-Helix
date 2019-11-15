import * as React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Search = ({ fields }) => (
    <div>
        <h1><Text field={fields.heading} /></h1>
    </div>
);
export default Search;
    