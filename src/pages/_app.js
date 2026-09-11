import { ApolloProvider } from "@apollo/react-hooks";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import ApolloClient from "apollo-boost";
import Router from "next/router";
import Script from "next/script";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import config from "@/outbreakafrica/config";
import * as ga from "@/outbreakafrica/lib/ga";
import theme from "@/outbreakafrica/theme";

import "leaflet/dist/leaflet.css";

import "react-multi-carousel/lib/styles.css";
import "simplebar/dist/simplebar.min.css";

Router.events.on("routeChangeComplete", (url) => ga.pageview(url));

const apolloClient = new ApolloClient({
  uri: config.graphqlURI,
});

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga.GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

CustomApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};
