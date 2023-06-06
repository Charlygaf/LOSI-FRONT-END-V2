import React from "react";
import { AppProps } from "next/app";
import { CartProvider } from "../cartContext";
import Layout from "../components/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>{" "}
    </CartProvider>
  );
}

export default MyApp;
