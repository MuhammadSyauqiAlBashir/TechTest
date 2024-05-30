import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

// const httpLink = createHttpLink({
//   uri: "https://rickandmortyapi.com/graphql",
// });

// const client = new ApolloClient({
//   uri: httpLink,
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});
export default client;
