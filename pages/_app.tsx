import Navbar from "@/components/shared/Navbar";
import "@/styles/index.scss";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps } from "next/app";
import App from "next/app";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      {Component.name !== "Login" && <Navbar />}
      {pageProps.appData}
      <div className="container">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
};

MyApp.getInitialProps = async (context: any) => {
  const initialProps: any =
    App.getInitialProps && (await App.getInitialProps(context));

  return {
    pageProps: { appData: "Hello _App Component", ...initialProps.pageProps },
  };
};

export default MyApp;
