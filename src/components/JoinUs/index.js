import { Section } from "@commons-ui/core";
import {
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import img1 from "@/outbreakafrica/assets/joinus-illo-1.svg";
import img2 from "@/outbreakafrica/assets/joinus-illo-2.svg";
import imgMobile from "@/outbreakafrica/assets/joinus-illo.svg";
import LinkButton from "@/outbreakafrica/components/Link/Button";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {
    width: "100%",
    margin: "3rem 0rem",
    padding: "1rem 0rem",
    backgroundColor: "#f9ff71",
  },
  section: {},
  container: {},
  description: {
    paddingBottom: typography.pxToRem(62),
    paddingTop: typography.pxToRem(21),
    [breakpoints.up("md")]: {
      paddingBottom: "unset",
      paddingTop: "unset",
    },
  },
  imgSrc1: {
    maxHeight: typography.pxToRem(223),
    [breakpoints.up("md")]: {
      maxHeigt: "auto",
      position: "absolute",
      right: 61,
      top: 0,
    },
  },
  imgSrc2: {
    height: "auto",
    width: "100%",
  },
  highlight: {
    [breakpoints.up("md")]: {
      position: "relative",
      overflow: "visible",
    },
  },
  highlightHeight: {
    height: "auto",
    [breakpoints.up("md")]: {
      height: typography.pxToRem((343 * widths.values.md) / widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem((343 * widths.values.lg) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      height: typography.pxToRem(343),
    },
  },
  highlightWidth: {
    width: "100%",
    [breakpoints.up("md")]: {
      width: typography.pxToRem((440 * widths.values.md) / widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem((440 * widths.values.lg) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      width: typography.pxToRem(440),
    },
  },
  subtitle: {
    padding: "1rem 0rem",
  },
  link: {},
}));

function JoinUs({ joinUs, ...props }) {
  const { title, description, link, link_label: linkLabel } = joinUs;

  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const imgSrc1 = isDesktop ? img2 : imgMobile;
  const imgSrc2 = img1;

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.container}
        >
          <Grid
            item
            xs={12}
            md={3}
            className={clsx(classes.highlightHeight, classes.highlight)}
          >
            <img
              src={imgSrc1}
              alt="hightlight"
              className={clsx(
                classes.highlightHeight,
                classes.highlightWidth,
                classes.imgSrc1
              )}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            container
            direction="column"
            justify="space-between"
            className={clsx(classes.highlightHeight, classes.description)}
          >
            <Typography variant="h2">{title}</Typography>
            <Typography variant="body1" className={classes.subtitle}>
              {description}
            </Typography>
            <div>
              <LinkButton
                href={link}
                color="secondary"
                variant="outlined"
                className={classes.link}
              >
                {linkLabel}
              </LinkButton>
            </div>
          </Grid>
          <Grid item md={4} implementation="css" smDown component={Hidden}>
            <img
              src={imgSrc2}
              alt="hightlight"
              className={clsx(classes.imgSrc2)}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

JoinUs.propTypes = {
  joinUs: PropTypes.shape({
    description: PropTypes.string,
    link: PropTypes.string,
    link_label: PropTypes.string,
    title: PropTypes.string,
  }),
  variant: PropTypes.oneOf(["compact", "full"]),
};

JoinUs.defaultProps = {
  joinUs: {
    title: "Join Us",
    description: "Be part of our initative.",
    link_label: "Learn More",
    link: "/contact/join/",
  },
  variant: "full",
};
export default JoinUs;
