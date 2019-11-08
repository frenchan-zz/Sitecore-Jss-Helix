import * as React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Search = ({ fields }) => (
<div>
    <p>Search Component</p>
    <Text field={fields.heading} />
</div>
);
export default Search;
    