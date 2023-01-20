import { ApolloProvider } from "@apollo/client";
import { ApolloClient } from "./apollo";
import { RA } from "./RA";

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <RA />
  </ApolloProvider>
);

export default App;
