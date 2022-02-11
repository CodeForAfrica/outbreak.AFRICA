import { RichTypography, Section } from "@commons-ui/core";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import DesktopCarousel from "./DesktopCarousel";
import MobileCarousel from "./MobileCarousel";

import coronaImage from "@/outbreakafrica/assets/images/coronavirus.svg";
import heroImage from "@/outbreakafrica/assets/images/heropattern.png";

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
      backgroundImage: `url(${coronaImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "90% 2%",
      backgroundSize: "50%",
      [breakpoints.up("md")]: {
        backgroundPosition: "20% 30%",
        backgroundSize: "75% 55%",
        padding: `${typography.pxToRem(20)} 0`,
      },
      [breakpoints.up("lg")]: {
        backgroundPosition: "20% 90%",
        backgroundSize: "70% 75%",
      },
      [breakpoints.up("xl")]: {
        padding: `${typography.pxToRem(59)} 0 ${typography.pxToRem(57)}`,
      },
    };
  },
  carousel: {
    overflow: "hidden",
    width: "calc(((100vw - 100%) / 2) + 100%)",
    zIndex: 1,
  },
  heroImage: {
    height: 250,
    width: 315,
    [breakpoints.up("md")]: {
      height: (widths.values.md * 426) / widths.values.xl,
      width: (widths.values.md * 536) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      height: (widths.values.lg * 426) / widths.values.xl,
      width: (widths.values.lg * 536) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      height: 426,
      width: 536,
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
    [breakpoints.up("md")]: (props) => ({
      paddingTop: props.isResearch ? 0 : "4.625rem",
    }),
    [breakpoints.up("lg")]: (props) => ({
      paddingTop: props.isResearch ? 0 : "8.125rem",
    }),
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
  const theme = useTheme();
  const hasCarousel = heroContent?.component?.[0]?.acf_fc_layout === "carousel";
  const hasImage = heroContent?.component?.[0]?.acf_fc_layout === "image";

  const classes = useStyles({ ...props, isResearch, hasCarousel });

  const { tagline, title, component } = heroContent || {};

  const { carousel_items: carouselItems, link_title: carouselLinkTitle } =
    (hasCarousel && component?.[0]) || {};
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const Carousel = isDesktop ? DesktopCarousel : MobileCarousel;

  const { url: imageUrl } = (hasImage && component?.[0]) || {};

  let md = 12;
  if (hasCarousel) {
    md = 7;
  }
  if (hasImage) {
    md = 6;
  }

  if (!heroContent) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          className={classes.hero}
        >
          <Grid item md={md} container>
            <Grid item xs={12}>
              <RichTypography
                variant={isResearch ? "h3" : "h1"}
                component="div"
                classes={{
                  root: clsx(classes.title, {
                    [classes.notCarousel]: !hasCarousel,
                  }),
                }}
              >
                {title}
              </RichTypography>
            </Grid>
            <Grid item xs={12} md={8}>
              <RichTypography
                variant="subtitle1"
                classes={{ root: classes.description }}
              >
                {tagline}
              </RichTypography>
            </Grid>
          </Grid>
          {hasCarousel && (
            <Grid item xs={12} md={4} className={classes.heroCarousel}>
              <Carousel
                carouselItems={carouselItems}
                carouselLinkTitle={carouselLinkTitle}
                height={isResearch ? 288 : undefined}
                isResearch={isResearch}
                classes={{ root: classes.carousel }}
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
    component: PropTypes.arrayOf(
      PropTypes.shape({
        acf_fc_layout: PropTypes.string,
      })
    ),
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
