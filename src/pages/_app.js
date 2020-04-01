import 'cross-fetch/polyfill';

import React from 'react';

import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import CssBaseline from '@material-ui/core/CssBaseline';
import {
  jssPreset,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core/styles';
import { create } from 'jss';

import theme from '../theme';

import * as ga from '../lib/ga';

Router.events.on('routeChangeComplete', url => ga.pageview(url));

const client = new ApolloClient({
  uri: 'https://graphql.hurumap.org/graphql'
});

export default class MyApp extends App {
  static jss = create(jssPreset());

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
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
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta charSet="utf-8" />
        </Head>
        <ApolloProvider client={client}>
          <StylesProvider jss={MyApp.jss}>
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
