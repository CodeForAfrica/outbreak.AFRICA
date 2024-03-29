import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import MenuButton from "@/outbreakafrica/components/Navigation/DesktopNavigation//MenuButton";
import DataMenuList from "@/outbreakafrica/components/Navigation/DesktopNavigation/DataMenuList";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
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
    height: 50,
    width: 50,
  },
  menuButtonPopper: {
    marginTop: typography.pxToRem(32),
    marginLeft: typography.pxToRem(20),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(40),
      marginLeft: typography.pxToRem(20),
    },
    [breakpoints.up("xl")]: {
      marginTop: typography.pxToRem(48),
      marginLeft: typography.pxToRem(20),
    },
  },
}));

export default function CountrySelector({
  context,
  countries,
  country,
  geoName,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <MenuButton
        color="secondary"
        variant="outlined"
        popperProps={{ placement: "right-start" }}
        classes={{ root: classes.menuButton, popper: classes.menuButtonPopper }}
      >
        <DataMenuList countries={countries} country={country} dense />
      </MenuButton>
      <Typography variant="h2" className={classes.countryName}>
        {geoName || country.shortName}
      </Typography>
    </div>
  );
}

CountrySelector.propTypes = {
  context: PropTypes.string.isRequired,
  geoName: PropTypes.string,
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  country: PropTypes.shape({
    isoCode: PropTypes.string,
    slug: PropTypes.string,
    shortName: PropTypes.string,
  }).isRequired,
};

CountrySelector.defaultProps = {
  geoName: undefined,
};
