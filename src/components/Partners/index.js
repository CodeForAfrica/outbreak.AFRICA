import React from "react";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import classNames from "classnames";

import Subscribe from "./Subscribe";
import PartnerGrid from "./PartnersGrid";
import JoinUs from "./JoinUs";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
   // backgroundImage: "linear-gradient(90deg, #170F49 0% 35%, transparent 35%), linear-gradient(90deg, transparent 0% 30%, #fcfc74 30%)",
    //backgroundSize: "90% 75%, auto",
    //backgroundPosition: "10% 10%, auto",
    //backgroundRepeat: "no-repeat, no-repeat",
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
  bannerContainer: {
    [theme.breakpoints.up("md")]: {
      paddingRight: "20%",
    },
  },
  partnerContainer: {
    paddingTop: '8%',
    paddingBottom: "5%",
  },
  joinUs: {
    [theme.breakpoints.up("md")]: {
      paddingTop: "25%",
    },
  },
  subscribe: {
    [theme.breakpoints.up("md")]: {
      paddingTop: "40%",
      zIndex: 1,
    },
  },
}));

function Partners(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      {!isMobile && 
      <>
        <div className={classes.yellowDiv} />

        <div className={classes.darkBlueDiv} />

        <div className={classes.oceanBlueDiv} />
      </>
    }
      <Section classes={{ root: classes.section}}>
        <Grid
            container
            direction={isMobile? "row-reverse": "row"}
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
