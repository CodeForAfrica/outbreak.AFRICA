import { AppBar, Toolbar, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    boxShadow: "0px 10px 40px #0000002E",
    [breakpoints.up("md")]: {
      boxShadow: "0px 5px 30px #0000002E",
    },
  },
  section: {},
  toolbar: {
    height: "4.375rem",
    [breakpoints.up("md")]: {
      height: "auto",
    },
  },
  grow: {
    flexGrow: 1,
  },
  root2: {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    width: "100%",
    height: "5.313rem",
    paddingRight: "2rem",
    backgroundColor: "transparent",
    boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.07)",
    [breakpoints.up("md")]: {
      padding: "0rem 8rem",
    },
  },
  noShadow: {
    boxShadow: "unset",
  },
  drawer: {
    backgroundColor: "transparent",
    outline: "none",
    boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.07)",
  },
  logoGrid: {
    marginRight: "3rem",
    [breakpoints.only("md")]: {
      margin: "0rem",
    },
  },
  linkGrid: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  logoLink: {
    marginRight: "2rem",
    color: "black",
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    fontWeight: "bolder",
    textDecoration: "none",
    [breakpoints.up("md")]: {
      margin: "0.625rem",
    },
    [breakpoints.up("lg")]: {
      margin: "1.375rem",
    },
  },
  searchButton: {
    "& > svg": {
      fontSize: "30px",
    },
    color: "black",
    marginBottom: "0.1rem", // Pixel perfect
  },
  iconLink: {
    margin: "1.375rem 0.7rem",
  },
  img: {
    height: "3rem",
  },
  span: {
    color: "blue",
    textDecoration: "none",
    fontWeight: "bolder",
  },
}));

function Navigation({
  outbreak: {
    page: { navigation },
    country,
    countries,
  },
  ...props
}) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar color="inherit" position="sticky" className={classes.root}>
      <Toolbar disableGutters className={classes.toolbar}>
        {isDesktop ? (
          <DesktopNavigation
            country={country}
            countries={countries}
            navigation={navigation}
            classes={{ section: classes.section }}
          />
        ) : (
          <>
            <div className={classes.grow} />
            <MobileNavigation
              country={country}
              countries={countries}
              navigation={navigation}
              classes={{ section: classes.section }}
            />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

Navigation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  outbreak: PropTypes.shape({
    country: PropTypes.string,
    countries: PropTypes.arrayOf(PropTypes.shape({})),
    page: PropTypes.shape({
      navigation: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};

export default Navigation;
