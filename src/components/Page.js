import React from "react";
import PropTypes from "prop-types";

import Error from "next/error";

import { makeStyles } from "@material-ui/core/styles";

import Footer from "./Footer";
import Navigation from "./Navigation";
import SEO from "./SEO";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    // Seems like you need height defined for AppBar position="sticky" to work
    // see: https://github.com/mui-org/material-ui/issues/16186
    height: "100vh",
    overflowX: "hidden",
  },
  section: {
    paddingTop: 0,
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

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <div className={classes.root}>
      <SEO {...props} />
      <Navigation outbreak={outbreak} classes={{ section: classes.section }} />

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
