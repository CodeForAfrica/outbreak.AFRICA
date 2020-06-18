import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RichTypography, Section } from "@commons-ui/core";

import heroImage from "assets/images/heropattern.png";
import coronaImage from "assets/images/coronavirus.svg";
import HeroCarousel from "./HeroCarousel";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: (props) => {
    if (!props.hasCarousel) {
      return {};
    }
    return {
      backgroundImage: `url(${heroImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0% 0%",
      backgroundSize: "cover",
    };
  },
  section: {},
  hero: (props) => {
    if (!props.hasCarousel) {
      return {};
    }
    return {
      flexGrow: 1,
      backgroundImage: `url(${props.heroContent && props.heroContent.background_image? props.heroContent.background_image: coronaImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "90% 5%",
      backgroundSize: `${typography.pxToRem(136)} ${typography.pxToRem(127)}`,
      [breakpoints.up("md")]: {
        backgroundPosition: "50% 20%",
        padding: `${typography.pxToRem(20)} 0`,
        backgroundSize: `${typography.pxToRem((widths.values.md * 587)/widths.values.xl)} ${typography.pxToRem((widths.values.md * 551)/widths.values.xl)}`,
      },
      [breakpoints.up("lg")]: {
        backgroundPosition: "40% 60%",
        backgroundSize: `${typography.pxToRem((widths.values.lg * 587)/widths.values.xl)} ${typography.pxToRem((widths.values.lg * 551)/widths.values.xl)}`,
      },
      [breakpoints.up("xl")]: {
        backgroundPosition: "40% 80%",
        padding: `${typography.pxToRem(59)} 0 ${typography.pxToRem(57)}`,
        backgroundSize: `${typography.pxToRem(587)} ${typography.pxToRem(551)}`,
      },
    };
  },

  heroCarousel: {
    "& ul > li": {
      padding: "0 8px",
    },
    width: "calc(((100vw - 100%) / 2) + 100%)",
    zIndex: 1,
    [breakpoints.up("md")]: {
      paddingTop: "2.625rem",
      position: "relative",
      right: "-100px",
    },
    [breakpoints.up("xl")]: {
      right: "-244px",
    },
  },
  heroImage: {
    width: typography.pxToRem(315),
    height: typography.pxToRem(250),
    [breakpoints.up("md")]: {
      width: typography.pxToRem((widths.values.md * 536) / widths.values.xl),
      height: typography.pxToRem((widths.values.md * 426) / widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem((widths.values.lg * 536) / widths.values.xl),
      height: typography.pxToRem((widths.values.lg * 426) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      width: typography.pxToRem(536),
      height: typography.pxToRem(426),
    },
  },
  title: {
    width: "100%",
    paddingTop: typography.pxToRem(29),
    "& .highlight": {
      display: "inline-block",
      background:
        "linear-gradient(180deg,rgba(255,255,255,0) 50%, #F9FF71 30% )",
    },
    [breakpoints.up("md")]: {
      paddingTop: "4.625rem",
    },
    [breakpoints.up("lg")]: {
      paddingTop: "8.125rem",
    },
    "& p": {
      margin: 0,
    },
  },
  notCarousel: {
    paddingTop: typography.pxToRem(29),
    [breakpoints.up("md")]: {
      paddingTop: (widths.values.md * 58) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      paddingTop: (widths.values.md * 58) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      paddingTop: typography.pxToRem(58),
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
    [breakpoints.up("md")]: {
      maxWidth: "41.12rem",
    },
    "& p": {
      margin: 0,
    },
  },
}));

function Hero({ heroContent, isResearch, ...props }) {
  const hasCarousel =
    heroContent &&
    heroContent.component &&
    heroContent.component.length &&
    heroContent.component[0].acf_fc_layout === "carousel";

  const hasImage =
    heroContent &&
    heroContent.component &&
    heroContent.component.length &&
    heroContent.component[0].acf_fc_layout === "image";

  const classes = useStyles({ ...props, hasCarousel, heroContent });

  if (!heroContent) {
    return null;
  }
  const { tagline, title, component } = heroContent;

  const { carousel_items: carouselItems, link_title: carouselLinkTitle } =
    (hasCarousel && component && component[0]) || {};

  const { url: imageUrl } = (hasImage && component && component[0]) || {};

  let md = 12;
  if (hasCarousel) {
    md = 7;
  }
  if (hasImage) {
    md = 6;
  }
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          className={classes.hero}
        >
          <Grid item container md={md}>
            <Grid item xs={12}>
              <RichTypography
                variant={isResearch ? "h3" : "h1"}
                component="div"
                classes={{
                  root: classNames(classes.title, {
                    [classes.notCarousel]: !hasCarousel,
                  }),
                }}
              >
                {title}
              </RichTypography>
            </Grid>
            <Grid item xs={12}>
              <RichTypography
                variant="subtitle1"
                classes={{ root: classes.description }}
              >
                {tagline}
              </RichTypography>
            </Grid>
          </Grid>
          {hasCarousel && (
            <Grid item xs={12} md={5} className={classes.heroCarousel}>
              <HeroCarousel
                carouselItems={carouselItems}
                carouselLinkTitle={carouselLinkTitle}
                isResearch={isResearch}
              />
            </Grid>
          )}
          {hasImage && (
            <Grid item xs={12} md={6} className={classes.notCarousel}>
              <img className={classes.heroImage} src={imageUrl} alt="title" />
            </Grid>
          )}
        </Grid>
      </Section>
    </div>
  );
}
Hero.propTypes = {
  heroContent: PropTypes.shape({
    component: PropTypes.arrayOf(PropTypes.shape({})),
    tagline: PropTypes.string,
    title: PropTypes.string,
    background_image: PropTypes.string,
  }),
  isResearch: PropTypes.bool,
};

Hero.defaultProps = {
  heroContent: undefined,
  isResearch: false,
};

export default Hero;
