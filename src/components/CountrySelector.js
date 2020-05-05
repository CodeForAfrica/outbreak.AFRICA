import React from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DataMenuList from "components/Navigation/DesktopNavigation/DataMenuList";
import MenuButton from "components/Navigation/DesktopNavigation//MenuButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    color: "#231f20",
    fontWeight: "normal",
    fontSize: "0.938rem",
    lineHeight: "normal",
  },
  countryName: {
    marginLeft: "1.125rem",
    textAlign: "start",
  },
  chooserButton: {
    marginTop: "0.938rem",
    marginBottom: "1.375rem",
  },
  changeCountryLabel: {
    fontWeight: 600,
    fontSize: "0.8125rem",
    color: "#848484",
  },
  menuButton: {
    backgroundColor: "white",
    height: 32,
    width: 32,
  },
  menuButtonPopper: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CountrySelector({ context, country, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <MenuButton
        color="secondary"
        size="large"
        variant="outlined"
        popperProps={{ placement: "right-start" }}
        classes={{ root: classes.menuButton, popper: classes.menuButtonPopper }}
      >
        <DataMenuList country={country} dense />
      </MenuButton>
      <Typography variant="h2" className={classes.countryName}>
        {country.shortName}
      </Typography>
    </div>
  );
}

CountrySelector.propTypes = {
  context: PropTypes.string.isRequired,
  country: PropTypes.shape({
    isoCode: PropTypes.string,
    slug: PropTypes.string,
    shortName: PropTypes.string,
  }).isRequired,
};
