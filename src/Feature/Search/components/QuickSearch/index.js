import * as React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import GraphQLData from '../../../../Foundation/GraphQL/GraphQLData';
import { loader as gqlLoader } from 'graphql.macro';

const SearchQuery = gqlLoader('./query.graphql');

const QuickSearch = ({ onChange, data }) => {

};

export default GraphQLData(SearchQuery, { name: 'searchQuery' })(QuickSearch);
    