import Navbar from "@/components/shared/Navbar";
import "@/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps } from "next/app";
import App from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {Component.name !== "Login" && <Navbar />}
      {pageProps.appData}
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
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
