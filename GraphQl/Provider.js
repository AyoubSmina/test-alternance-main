import {
  ApolloProvider,
  createHttpLink,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const uri = "https://rickandmortyapi.com/graphql";

const link = createHttpLink({
  uri,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default function Provider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
