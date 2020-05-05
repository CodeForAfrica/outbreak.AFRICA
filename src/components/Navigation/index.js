import React from "react";
import PropTypes from "prop-types";

import { AppBar, Toolbar, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 10px 40px #0000002E",
    [theme.breakpoints.up("md")]: {
      boxShadow: "0px 5px 30px #0000002E",
    },
  },
  section: {
    height: "4.375rem",
    [theme.breakpoints.up("md")]: {
      height: "6.375rem",
    },
    [theme.breakpoints.up("xl")]: {
      height: "9.375rem",
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
    [theme.breakpoints.up("md")]: {
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
    [theme.breakpoints.only("md")]: {
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
    [theme.breakpoints.up("md")]: {
      margin: "0.625rem",
    },
    [theme.breakpoints.up("lg")]: {
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
    <>
      <AppBar position="fixed" color="inherit" className={classes.root}>
        <Toolbar disableGutters className={classes.section}>
          {isDesktop ? (
            <DesktopNavigation country={country} countries={countries} navigation={navigation} />
          ) : (
            <>
              <div className={classes.grow} />
              <MobileNavigation country={country} countries={countries} navigation={navigation} />
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* https://material-ui.com/components/app-bar/#fixed-placement */}
      <Toolbar className={classes.section} />
    </>
  );
}

Navigation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  outbreak: PropTypes.shape({
    page: PropTypes.shape({
      navigation: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    countries: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default Navigation;
