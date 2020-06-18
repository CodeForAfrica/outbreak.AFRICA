import React from "react";
import PropTypes from "prop-types";

import Error from "next/error";
import Router from "next/router";

import { LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "./Footer";
import Navigation from "./Navigation";
import SEO from "./SEO";

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
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  outbreak: PropTypes.shape({}).isRequired,
};

export default Page;
