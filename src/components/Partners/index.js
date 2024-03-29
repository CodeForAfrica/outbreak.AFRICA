import { Section } from "@commons-ui/core";
import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import JoinUs from "./JoinUs";
import PartnerGrid from "./PartnersGrid";
import Subscribe from "./Subscribe";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
  },
  yellowDiv: {
    position: "absolute",
    width: "70%",
    height: "100%",
    right: 0,
    backgroundColor: "#F9FF71",
  },
  darkBlueDiv: {
    backgroundColor: "#170F49",
    width: "35%",
    height: "52.5%",
    position: "absolute",
    top: "10%",
    zIndex: 1,
  },
  oceanBlueDiv: {
    backgroundColor: "#cbdbfb",
    position: "absolute",
    width: "30%",
    bottom: "2.5%",
    height: "40%",
  },
  section: {
    zIndex: 1,
    position: "relative",
  },
  mobileSection: {
    width: "100%",
    margin: "0%",
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
      paddingTop: "8%",
      paddingBottom: "5%",
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  joinUs: {
    padding: "4rem 1.25rem 3rem 1.375rem",
    backgroundColor: "#cbdbfb",
    [theme.breakpoints.up("md")]: {
      background: "transparent",
      paddingTop: "20%",
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  subscribe: {
    padding: "5rem 1.25rem 2.5rem 1.375rem",
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

function Partners({ partners, subscribe, joinUs, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      {isDesktop && (
        <>
          <div className={classes.yellowDiv} />

          <div className={classes.darkBlueDiv} />

          <div className={classes.oceanBlueDiv} />
        </>
      )}
      <Section classes={{ root: clsx({ [classes.section]: isDesktop }) }}>
        <Grid container direction={isDesktop ? "row" : "column-reverse"}>
          <Grid
            item
            md={5}
            sm={12}
            container
            direction="column"
            className={classes.bannerContainer}
          >
            <Grid item className={classes.subscribe}>
              {subscribe && (
                <Subscribe
                  title={subscribe.title}
                  description={subscribe.description}
                />
              )}
            </Grid>
            <Grid item className={classes.joinUs}>
              {joinUs && (
                <JoinUs
                  title={joinUs.title}
                  description={joinUs.description}
                  linkLabel={joinUs.link_label}
                />
              )}
            </Grid>
          </Grid>
          <Grid item md={7} sm={12} className={classes.partnerContainer}>
            <PartnerGrid partners={partners} />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

Partners.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape({})),
  subscribe: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  joinUs: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link_label: PropTypes.string,
  }),
};

Partners.defaultProps = {
  partners: [],
  subscribe: undefined,
  joinUs: undefined,
};

export default Partners;
