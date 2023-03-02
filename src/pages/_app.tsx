import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="w-screen h-screen pb-40">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
