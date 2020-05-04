import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RichTypography, Section } from "@commons-ui/core";

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
    [theme.breakpoints.up("md")]: {
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
    width: "calc(((100vw - 100%) / 2) + 100%)",
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      paddingTop: "2.625rem",
      position: "relative",
      right: "-366px",
    },
    [theme.breakpoints.up("xl")]: {
      right: "-244px",
    },
  },
  title: {
    width: "100%",
    "& .highlight": {
      display: "inline-block",
      background:
        "linear-gradient(180deg,rgba(255,255,255,0) 50%, #F9FF71 30% )",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "4.625rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "8.125rem",
    },
  },
  description: {
    marginTop: "1.0625rem",
    marginBottom: "3rem",
    width: "100%",
    "& .highlight": {
      background:
        "linear-gradient(180deg,rgba(255,255,255,0) 50%, #ccdcff 30% )",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "41.12rem",
    },
  },
}));

function Hero(
  { heroCarousel: { 
    carousel_items: carouselItems,
    link_title: linkTitle },
     ...props
  }) {
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
              <RichTypography
                variant="h1"
                component="div"
                classes={{ root: classes.title }}
              >
                {`<span class='highlight'>Contextual</span> data <br /> 
                  with <span class='highlight'>actionable</span>  
                  insights`}
              </RichTypography>
            </Grid>
            <Grid item xs={12}>
              <RichTypography
                variant="subtitle1"
                classes={{ root: classes.description }}
              >
                {`Data driven analysis on  
                <span class='highlight'>COVID-19</span> in more than 
                10 African countries. Find out more about us.`}
              </RichTypography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} className={classes.heroCarousel}>
            <HeroCarousel
              carouselItems={carouselItems}
              carouselLinkTitle={linkTitle}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}
Hero.propTypes = {
  heroCarousel: PropTypes.shape({
    carousel_items: PropTypes.arrayOf(PropTypes.shape({})),
    link_title: PropTypes.string,
  })
};

Hero.defaultProps = {
  carouselItems: undefined,
  carouselLinkTitle: undefined,
};

export default Hero;
