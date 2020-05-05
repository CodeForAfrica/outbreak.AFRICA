import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import config from "config";

import Footer from "./Footer";
import Navigation from "./Navigation";
import SEO from "./SEO";

const useStyles = makeStyles(() => ({
  root: {
    overflowX: "hidden",
  },
  section: {},
}));

function Page({ children, classes: classesProp, takwimu, ...props }) {
  const classes = useStyles({ classes: classesProp });
  return (
    <div className={classes.root}>
      <SEO {...props} />
      <Navigation
        takwimu={takwimu || config}
        classes={{ section: classes.section }}
      />
      {children}
      <Footer
        takwimu={takwimu || config}
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
  takwimu: PropTypes.shape({}),
  title: PropTypes.string,
};

Page.defaultProps = {
  takwimu: undefined,
  title: undefined,
};

export default Page;
