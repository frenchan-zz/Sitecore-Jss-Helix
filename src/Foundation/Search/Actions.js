import GraphQLClientFactory from '../GraphQL/GraphQLClientFactory';
import config from '../../temp/config';
import { loader as gqlLoader } from 'graphql.macro';

const SearchQuery = gqlLoader('./query.graphql');

function ReceiveResults(json) {
    return {
        type: "RECEIVE_RESULTS",
        results: json.data.search.results.items.map(child => child.item),
        facets: json.data.search.facets,
        pageInfo: json.data.search.results.pageInfo,
        receivedAt: Date.now(),
        totalCount: json.data.search.results.totalCount
    }
}

async function FetchResults(state) {
    const client = GraphQLClientFactory(config.graphQLEndpoint, false, state);

    const json = await client.query({
        variables: {
            ...state
        },
        query: SearchQuery
    });
    return ReceiveResults(json);
}

export default FetchResults