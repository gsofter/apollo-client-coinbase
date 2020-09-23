import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider
} from "@apollo/client";
import ExchangeRates from "./ExchangeRates";

const rootElement = document.getElementById("root");

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

// useEffect(() => {
//   client
//     .query({
//       query: gql`
//         query GetRate {
//           rates(currency: "USD") {
//             currency
//           }
//         }
//       `
//     })
//     .then((result) => console.log(result));
// });
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2> My First Apollo app </h2>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, rootElement);
