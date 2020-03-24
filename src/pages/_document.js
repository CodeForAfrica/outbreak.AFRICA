import React from 'react';

import Document, { Head, Main, NextScript } from 'next/document';

import { ServerStyleSheets } from '@material-ui/core/styles';

import theme from '../theme';

const GOOGLE_ANALYTICS_TRACKING_ID = 'UA-92541368-6';

const getAnalyticsScript = () => {
  return {
    __html: `
      window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
      ga('create', '${GOOGLE_ANALYTICS_TRACKING_ID}', 'auto');

      // Ensures consistency in the URL paths that get reported to Google Analytics;
      // avoiding the problem where separate rows in your pages reports actually point to the same page.
      ga('require', 'cleanUrlTracker');
      // Enables declarative event tracking, via HTML attributes in the markup.
      ga('require', 'eventTracker', {
          hitFilter: (model) => {
              if (model.get('eventCategory') === 'Twitter') {
                  // event to social
                  model.set('hitType', 'social');
                  model.set('socialNetwork', model.get('eventCategory'));
                  model.set('socialAction', model.get('eventAction'));
                  model.set('socialTarget', model.get('eventLabel'));
                  model.set('eventCategory', null);
                  model.set('eventAction', null);
                  model.set('eventLabel', null);
              }
          }
      });
      // Allows you to track when elements are visible within the viewport.
      ga('require', 'impressionTracker');
      // Automatically tracks how far down the page a user scrolls.
      ga('require', 'maxScrollTracker', {
          fieldsObj: {
              eventAction: 'Scrolled',
              eventLabel: window.location.href
          }
      });
      // Automatically tracks link clicks to external domains e.g. Medium
      // To track all types of link clicks i.e. Tracking right-clicks and middle-clicks
      ga('require', 'outboundLinkTracker', {
          events: ['click', 'auxclick', 'contextmenu']
      });
      // Automatically tracks how long pages are in the visible state
      // (as opposed to in a background tab)
      ga('require', 'pageVisibilityTracker');
      // Automatically tracks URL changes for single page applications.
      // Analysis page changes the url like a single page app.
      ga('require', 'urlChangeTracker');

      ga('send', 'pageview');
      ga('create', '${GOOGLE_ANALYTICS_TRACKING_ID}', 'auto', {'name': 't0'});
      ga('t0.send', 'pageview');`
  };
};

class MyDocument extends Document {
  render() {
    const { lang } = this.props;
    return (
      <html lang={lang}>
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
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta
            name="msapplication-TileColor"
            content={theme.palette.primary.main}
          />

          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Lora:400,700|Muli:400,600,700"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lora:400,700|Muli:400,600,700&display=swap"
            rel="stylesheet"
          />

          <link rel="manifest" href="/manifest.json" />

          {/* <!-- Google Analytics --> */}
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={getAnalyticsScript()}
          />
          {/* <!-- Google Analytics: impressionTracker browser support --> */}
          <script
            async
            src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"
          />
          <script async src="https://www.google-analytics.com/analytics.js" />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/autotrack/2.4.1/autotrack.js"
          />
          {/* <!-- End Google Analytics --> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    lang: ctx.query.lang || 'en',
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  };
};

export default MyDocument;
