import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import Footer from "./Footer";
import Navigation from "./Navigation";
import SEO from "./SEO";

const useStyles = makeStyles(() => ({
  root: {
    overflowX: "hidden",
  },
  section: {},
}));

function Page({
  children,
  classes: classesProp,
  outbreak,
  ...props
}) {
  const classes = useStyles({ classes: classesProp });

  return (
    <div className={classes.root}>
      <SEO {...props} />
      <Navigation
        outbreak={outbreak}
        classes={{ section: classes.section }}
      />

      {children}
      <Footer
        outbreak={outbreak}
        classes={{ section: classes.section }}
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
