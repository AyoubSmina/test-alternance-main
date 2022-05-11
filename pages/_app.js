import "../styles/globals.css";

import ApolloProvider from "GraphQl/Provider";
import Layout from "Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
