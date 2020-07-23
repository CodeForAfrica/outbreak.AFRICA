import React from "react";
import PropTypes from "prop-types";

import { MenuItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import config from "config";
import Link from "components/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "0 1.25rem",
    justifyContent: "center",
    backgroundColor: "white",
  },
  container: {
    [theme.breakpoints.up("md")]: {
      width: "58.265625rem", // .75 of lg
      paddingTop: "1.5rem",
      paddingLeft: "1.5rem",
      paddingBottom: "0.75rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80.6875rem",
    },
  },
  flag: {
    height: "2.375rem",
    width: "2.375rem",
    marginRight: "0.625rem",
    border: "2px solid white",
    borderRadius: "1.187rem",
  },
  flagsContainer: {
    overflow: "auto",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      overflow: "visible",
      justifyContent: "unset",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "1.5rem",
    },
  },
  countryLink: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "transparent",
      color: "black",
      textDecoration: "none",
      "& span": {
        borderBottom: "unset",
      },
    },
    height: "fit-content",
    marginBottom: "1.25em",
    textTransform: "none",
    padding: 0,
    minWidth: "9rem",
    margin: 0,
    justifyContent: "left",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      minWidth: "11.25rem",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 1.5rem",
    },
    "& span": {
      borderBottom: "1px solid",
    },
  },
  countryName: {
    lineHeight: "unset",
  },
  leftContent: {
    height: "fit-content",
    marginBottom: "1.25rem",
    [theme.breakpoints.up("md")]: {
      height: "15.625rem",
      marginBottom: "0",
    },

    "& p": {
      fontSize: theme.typography.body2.fontSize,
    },
  },
  title: {
    marginBottom: "1.25rem",
    marginTop: "3rem",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  },
  menulink: {
    color: "black",
  },
}));

function MenuItemLink(props) {
  const classes = useStyles();
  return (
    <MenuItem style={{ padding: "1rem" }}>
      <Link {...props} className={classes.menulink} />
    </MenuItem>
  );
}

function DataMenu({ profile }) {
  const { countries } = config;

  return (
    <>
      {countries.map((country) => (
        <MenuItemLink
          key={country.slug}
          underline="none"
          href="/[geoIdOrSlug]"
          as={`/${profile(country)}`}
        >
          {country.shortName}
        </MenuItemLink>
      ))}
    </>
  );
}

DataMenu.propTypes = {
  profile: PropTypes.func.isRequired,
};

export default DataMenu;
