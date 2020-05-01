import React from "react";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import classNames from 'classnames';

import Subscribe from "./Subscribe";
import PartnerGrid from "./PartnersGrid";
import JoinUs from "./JoinUs";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
  },
  yellowDiv: {
    position: "absolute",
    width: "70%",
    height: '100%',
    right: 0,
    backgroundColor: "#F9FF71",
  },
  darkBlueDiv: {
    backgroundColor: "#170F49",
    width: "35%",
    height: "52.5%",
    position: "absolute",
    top: "10%",
    zIndex: 1
  },
  oceanBlueDiv: {
    backgroundColor: "#cbdbfb",   
    position: "absolute",
    width: "30%",
    bottom: "12.5%",
    height: "25%",
  },
  section: {
    zIndex: 1,
    position: 'relative',
  },
  mobileSection: {
    width: "100%",
    margin: "0%"
  },
  bannerContainer: {
    paddingRight: 0,
    [theme.breakpoints.up("md")]: {
      paddingRight: "20%",
    },
  },
  partnerContainer: {
    padding: "2rem 1.25rem 4rem 1.375rem",
    backgroundColor: "#F9FF71",
    [theme.breakpoints.up("md")]: {
      background: "transparent",
      paddingTop: '8%',
      paddingBottom: "5%",
      paddingRight: 0,
      paddingLeft: 0,
    }
  },
  joinUs: {
    padding: "4rem 1.25rem 3rem 1.375rem",
    backgroundColor: "#cbdbfb",
    [theme.breakpoints.up("md")]: {
      background: "transparent",
      paddingTop: "25%",
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  subscribe: {
    padding: "5rem 1.25rem 5rem 1.375rem",
    backgroundColor: "#170F49",
    [theme.breakpoints.up("md")]: {
      background: "transparent",
      paddingTop: "40%",
      paddingRight: 0,
      paddingLeft: 0,
      zIndex: 1,
    },
  },
}));

function Partners(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      {isDesktop && 
      <>
        <div className={classes.yellowDiv} />

        <div className={classes.darkBlueDiv} />

        <div className={classes.oceanBlueDiv} />
      </>
    }
      <Section classes={{ root: classNames({[classes.section]: isDesktop}) }}>
        <Grid
            container
            direction={isDesktop ? "row": "column-reverse"}
          >
            <Grid item md={5} sm={12} direction="column" className={classes.bannerContainer}>
              <Grid item className={classes.subscribe}>
                <Subscribe />
              </Grid>
              <Grid item className={classes.joinUs}>
                <JoinUs />
              </Grid>
            </Grid>

            <Grid md={7} sm={12} className={classes.partnerContainer}   >
              <PartnerGrid />
            </Grid>
          </Grid>
        </Section>
      </div>
  );
}

export default Partners;
