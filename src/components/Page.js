import { LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Error from "next/error";
import Router from "next/router";
import Script from "next/script";
import PropTypes from "prop-types";
import React from "react";

import Footer from "./Footer";
import Navigation from "./Navigation";
import SEO from "./SEO";

import { GA_TRACKING_ID } from "@/outbreakafrica/lib/ga";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    // Seems like you need height defined for AppBar position="sticky" to work
    // see: https://github.com/mui-org/material-ui/issues/16186
    height: "100vh",
    // font-boosting: https://stackoverflow.com/questions/13430897/how-to-override-font-boosting-in-mobile-chrome#comment61478376_16432702
    maxHeight: 999999,
    overflowX: "hidden",
  },
  section: {
    paddingTop: 0,
  },
  routeIndicator: {
    position: "relative",
  },
  routeIndicatorProgress: {
    top: 0,
    left: 0,
    width: "100%",
    position: "absolute",
  },
  footer: {
    marginTop: typography.pxToRem(91.82),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(81.39),
    },
  },
}));

function Page({
  children,
  classes: classesProp,
  errorCode,
  outbreak,
  ...props
}) {
  const classes = useStyles({ classes: classesProp });
  const [routeChanging, setRouteChanging] = React.useState(false);

  React.useEffect(() => {
    const handleRouteChangeStart = () => {
      setRouteChanging(true);
    };
    const handleRouteChangeComplete = () => {
      setRouteChanging(false);
    };
    const handleRouteChangeError = () => {
      setRouteChanging(false);
    };

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);
    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <div className={classes.root}>
      <SEO {...props} />
      <Navigation outbreak={outbreak} classes={{ section: classes.section }} />
      {routeChanging && (
        <div className={classes.routeIndicator}>
          <LinearProgress
            variant="query"
            color="primary"
            className={classes.routeIndicatorProgress}
          />
        </div>
      )}

      {children}
      <Footer
        outbreak={outbreak}
        classes={{ root: classes.footer, section: classes.section }}
      />

      {/* <!-- Google Analytics --> */}
      {/* <!-- Google Analytics: impressionTracker browser support --> */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', '${GA_TRACKING_ID}', 'auto');

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
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/autotrack/2.4.1/autotrack.js"
        strategy="afterInteractive"
      />
      {/* <!-- End Google Analytics --> */}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  classes: PropTypes.shape({}),
  errorCode: PropTypes.number,
  outbreak: PropTypes.shape({}).isRequired,
};

Page.defaultProps = {
  classes: undefined,
  errorCode: undefined,
};

export default Page;
