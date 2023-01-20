import { ApolloClient as _ApolloCLient, InMemoryCache } from "@apollo/client";

export const ApolloClient = new _ApolloCLient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});
