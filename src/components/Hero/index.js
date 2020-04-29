import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import heroImage from "assets/images/heropattern.png";
import coronaImage from "assets/images/coronavirus.svg";
import HeroCarousel from "./HeroCarousel";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 0%",
    backgroundSize: "cover",
  },
  section: {},
  hero: {
    flexGrow: 1,
    backgroundImage: `url(${coronaImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "90% 2%",
    backgroundSize: "50%",
    //margin: "0 auto",
    //padding: "2.125rem 1.125rem 0 1.125rem",
    //width: "100%",
    [theme.breakpoints.up("md")]: {
     // padding: "3.8125rem 0 0",
      //width: `${(1640 / 1920) * 100}%`,
      backgroundPosition: "20% 30%",
      backgroundSize: "75% 55%",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundPosition: "20% 90%",
      backgroundSize: "70% 75%",
    },
  },
  heroCarousel: {
    "& ul > li": {
      padding: "0 8px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2.625rem",
      position: "relative",
      right: "-122px",
    },
  },
  title: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      paddingTop: "4.625rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "8.125rem",
    },
  },
  highlight: {
    display: "inline-block",
    background: "linear-gradient(180deg,rgba(255,255,255,0) 50%, #F9FF71 30% )",
  },
  highlightBlue: {
    display: "inline-block",
    background: "linear-gradient(180deg,rgba(255,255,255,0) 50%, #ccdcff 30% )",
  },
  description: {
    marginTop: "1.0625rem",
    marginBottom: "3rem",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "41.12rem",
    },
  },
}));

function Hero(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          className={classes.hero}
        >
          <Grid item container md={7}>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" className={classes.title}>
                <span className={classes.highlight}>Contextual</span> data <br />
                with <span className={classes.highlight}>actionable</span>{" "}
                insights
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                component="div"
                className={classes.description}
              >
                Data driven analysis on{" "}
                <span className={classes.highlightBlue}>COVID-19</span> in more
                than 10 African countries. Find out more about us.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} className={classes.heroCarousel}>
            <HeroCarousel />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

export default Hero;
