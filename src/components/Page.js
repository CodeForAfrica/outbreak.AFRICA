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
    about,
    organizationLogo,
    initiativeLogo,
    quickLinks,
    legalLinks,
     ...props }) {

  const classes = useStyles({ classes: classesProp });

  return (
    <div className={classes.root}>
      <SEO {...props} />
      <Navigation 
        navigation={navigation}
        classes={{ section: classes.section }} />

      {children}
      <Footer 
        about={about}
        organizationLogo={organizationLogo}
        initiativeLogo={initiativeLogo}
        quickLinks={quickLinks}
        legalLinks={legalLinks}
        classes={{ section: classes.section }} />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  navigation: PropTypes.shape({}),
  about: PropTypes.shape({}),
  organizationLogo: PropTypes.shape({}),
  initiativeLogo: PropTypes.shape({}),
  quickLinks: PropTypes.shape({}),
  legalLinks: PropTypes.shape({}),
  title: PropTypes.string,
};

Page.defaultProps = {
  title: undefined,
  navigation: undefined,
  about: undefined,
  organizationLogo: undefined,
  initiativeLogo: undefined,
  quickLinks: undefined,
  legalLinks: undefined
};

export default Page;
