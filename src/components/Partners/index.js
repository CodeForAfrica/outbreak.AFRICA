import React from "react";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Subscribe from "./Subscribe";
import PartnerGrid from "./PartnersGrid";
import JoinUs from "./JoinUs";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
  },
  bannerContainer: {
    position: "relative",
    width: "30%",
  },
  partnerContainer: {
    width: "70%",
  },
  joinUs: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      left: 0,
      top: "62%",
    },
  },
  subscribe: {
    width: "120%",
    padding: "1rem 0rem ",
    top: "10%",
    position: "absolute",
    zIndex: 1,
  },
}));

function Partners() {
  const classes = useStyles();
  const theme = useTheme();
  const renderDesktopPartner = () => {
    return (
        <Grid
          container
          direction="row"
        >
          <Grid item className={classes.bannerContainer}>
            <Grid item className={classes.subscribe}>
              <Subscribe />
            </Grid>
            <Grid item className={classes.joinUs}>
              <JoinUs />
            </Grid>
          </Grid>

          <Grid className={classes.partnerContainer}>
            <PartnerGrid />
          </Grid>
        </Grid>
    );
  };
  const rendeMobilePartner = () => {
    return (
      <Grid container direction="row">
        <PartnerGrid />
        <Subscribe />
        <JoinUs />
      </Grid>
    );
  };
  return (
    <div className={classes.root}>
      {useMediaQuery(theme.breakpoints.up("md"))
        ? renderDesktopPartner()
        : rendeMobilePartner()}
    </div>
  );
}

export default Partners;
