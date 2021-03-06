import React from "react";

import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import CssBaseline from "@material-ui/core/CssBaseline";
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { create } from "jss";

import theme from "theme";

import * as ga from "lib/ga";
import config from "config";

import "leaflet/dist/leaflet.css";
import "react-multi-carousel/lib/styles.css";
import "simplebar/dist/simplebar.min.css";

Router.events.on("routeChangeComplete", (url) => ga.pageview(url));

const client = new ApolloClient({
  uri: config.graphqlURI,
});

export default class CustomApp extends App {
  static jss = create(jssPreset());

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta charSet="utf-8" />
        </Head>
        <ApolloProvider client={client}>
          <StylesProvider jss={CustomApp.jss}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
        </ApolloProvider>
      </>
    );
  }
}
