import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Client from "./component/Client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",

  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <div>
          <h1>Hi</h1>
          <Client />
        </div>
      </ApolloProvider>
    </div>
  );
};

export default App;
