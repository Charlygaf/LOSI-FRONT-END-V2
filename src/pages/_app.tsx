import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="h-24 min-h-screen">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
