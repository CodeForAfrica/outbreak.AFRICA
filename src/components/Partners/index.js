import React from "react";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Subscribe from "./Subscribe";
import PartnerGrid from "./PartnersGrid";
import JoinUs from "./JoinUs";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
  },
  desktopContainer: {},
  joinUs: {
    position: "absolute",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      top: "33rem",
    },
  },
  partner: {
    width: "70%",
  },
  subscribe: {
    width: "35%",
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
      <>
        <Grid
          container
          direction="row"
          justify="flex-end"
          className={classes.desktopContainer}
        >
          <Grid item className={classes.joinUs}>
            <JoinUs />
          </Grid>
          <Grid className={classes.partner}>
            <PartnerGrid />
          </Grid>
        </Grid>
        <Grid item className={classes.subscribe}>
          <Subscribe />
        </Grid>
      </>
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
