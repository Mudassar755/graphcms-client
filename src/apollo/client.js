import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api-eu-central-1.graphcms.com/v2/ckhf77o5yb5i601xp2yzdcs43/master',
        fetch,
    }),
    cache: new InMemoryCache()
});