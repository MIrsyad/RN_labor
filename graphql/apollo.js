import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://xnews-development.herokuapp.com/x-news-guest',
  }),
  cache: new InMemoryCache(),
});

const GraphProvider = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export {GraphProvider};
export default client;
