import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import theme from "@/outbreakafrica/theme";

class CustomDocument extends Document {
  render() {
    const { lang } = this.props;

    return (
      <Html lang={lang}>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0050ff" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Changa:700|Open+Sans:400,700&display=swap"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Changa:700|Open+Sans:400,700&display=swap"
            rel="stylesheet"
          />

          <link rel="manifest" href="/manifest.json" />

          {/* <!-- Google Analytics: impressionTracker browser support --> */}
          <script
            async
            src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    lang: ctx.query.lang || "en",
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default CustomDocument;
