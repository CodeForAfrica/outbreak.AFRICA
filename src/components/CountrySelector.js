import React from "react";
import PropTypes from "prop-types";

import { Typography, ButtonBase, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
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
}));

export default function CountrySelector({ context, country, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container direction="column">
      <Grid item>
        <ButtonBase
          disableRipple
          disableTouchRipple
          style={{ outline: "none" }}
          className={classes.chooserButton}
          onClick={
            process.browser &&
            window.toggleDrawer &&
            window.toggleDrawer(context)
          }
        >
          <Typography variant="h2" className={classes.countryName}>
            {country.shortName}
          </Typography>
        </ButtonBase>
      </Grid>
    </Grid>
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
