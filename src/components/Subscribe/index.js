import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import { Section } from "@commons-ui/core";

import Form from "@/outbreakafrica/components/Form";

import config from "@/outbreakafrica/config";
import email from "@/outbreakafrica/assets/email.svg";
import emailFocus from "@/outbreakafrica/assets/electric-blue-email.svg";
import source from "@/outbreakafrica/assets/subscribe.png";
import blueCircles from "@/outbreakafrica/assets/blue-circles.svg";

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, widths }) => ({
    root: {
      backgroundColor: palette.secondary.main,
      color: palette.text.secondary,
    },
    section: {},
    sectionCompact: {
      margin: "0 auto",
      width: "100 %",
    },
    button: {
      padding: 0,
      paddingTop: "1rem",
    },
    form: {
      "& #mc_embed_signup": {
        background: "inherit",
        color: "inherit",
      },
      "& #mc_embed_signup form": {
        padding: 0,
      },
      "& #mc_embed_signup label": {
        display: "none",
      },
      "& #mc_embed_signup input.email": {
        background: "none",
        border: "none",
        borderBottom: "1px solid currentColor",
        color: "currentColor",
        margin: "1rem 0",
        width: "100%",
        [breakpoints.up("md")]: {
          width: typography.pxToRem(
            (395 * widths.values.md) / widths.values.xl
          ),
        },
        [breakpoints.up("lg")]: {
          width: typography.pxToRem(
            (395 * widths.values.lg) / widths.values.xl
          ),
        },
        [breakpoints.up("xl")]: {
          width: typography.pxToRem(395),
        },
      },
      "& #mc_embed_signup .button": {
        backgroundImage: `url(${email})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "40px 40px",
        height: 55,
        paddingLeft: typography.pxToRem(50),
        "&:hover": {
          backgroundImage: `url(${emailFocus})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "40px 40px",
        },
        "&:focus": {
          backgroundImage: `url(${emailFocus})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "40px 40px",
        },
      },
    },
    img: {
      height: "2.5rem",
    },
    input: {
      color: palette.text.secondary,
      fontSize: typography.caption.fontSize,
      lineHeight: typography.caption.lineHeight,
      borderBottom: "1px solid white",
      width: "100%",
      [breakpoints.up("md")]: (props) =>
        props.variant === "full" && {
          width: "80%",
        },
    },
    subscribeGrid: (props) => {
      if (props.variant === "compact") {
        return {
          [breakpoints.up("md")]: {
            paddingBottom: typography.pxToRem(75),
            paddingLeft: typography.pxToRem(
              (67 * widths.values.md) / widths.values.xl
            ),
            paddingRight: typography.pxToRem(
              (53 * widths.values.md) / widths.values.xl
            ),
            paddingTop: typography.pxToRem(40),
          },
          [breakpoints.up("lg")]: {
            paddingLeft: typography.pxToRem(
              (67 * widths.values.lg) / widths.values.xl
            ),
            paddingRight: typography.pxToRem(
              (53 * widths.values.lg) / widths.values.xl
            ),
          },
          [breakpoints.up("xl")]: {
            paddingLeft: typography.pxToRem(67),
            paddingRight: typography.pxToRem(53),
          },
        };
      }
      return {
        padding: "5.625rem 0rem",
        [breakpoints.up("md")]: {
          padding: "2rem",
        },
        [breakpoints.up("lg")]: {
          padding: "3rem 0rem 4rem",
        },
        [breakpoints.up("xl")]: {
          padding: "4rem 0rem 5rem",
        },
      };
    },
    circlesImage: {
      display: "none",
      [breakpoints.up("md")]: {
        display: "initial",
        height: (widths.values.md * 389) / widths.values.xl,
        position: "absolute",
        left: "190px",
      },
      [breakpoints.up("lg")]: {
        height: (widths.values.lg * 389) / widths.values.xl,
        left: "150px",
      },
      [breakpoints.up("xl")]: {
        height: "389px",
        left: "190px",
      },
    },
    subscribeImage: {
      display: "none",
      [breakpoints.up("md")]: {
        display: "initial",
        margin: "2rem",
        height: (widths.values.md * 448) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        height: (widths.values.lg * 448) / widths.values.xl,
        left: "-110px",
        position: "absolute",
        top: 0,
      },
      [breakpoints.up("xl")]: {
        height: "448px",
        margin: 0,
      },
    },
    subscribeImageDiv: (props) => {
      if (props.variant === "full") {
        return {
          display: "none",
          [breakpoints.up("md")]: {
            display: "flex",
            position: "relative",
            overflow: "visible",
          },
        };
      }
      return {
        display: "none",
      };
    },
    subtitle: {
      paddingBottom: "2rem",
    },
    title: {
      paddingBottom: "2rem",
    },
  })
);

function Subscribe({ children, subscribe, variant, ...props }) {
  const classes = useStyles({ ...props, variant });
  const { title, description } = subscribe;

  // Default is variant = "full"
  let highlightColumns = 5;
  let descriptionColumns = 7;
  let descriptionVariant = "subtitle1";
  if (variant === "compact") {
    highlightColumns = undefined; // We could also set to 12 but xs=12 already
    descriptionColumns = undefined;
    descriptionVariant = "caption";
  }

  return (
    <div className={classes.root}>
      <Section
        classes={{
          root: classNames(
            { [classes.section]: variant === "full" },
            { [classes.sectionCompact]: variant === "compact" }
          ),
        }}
      >
        <Grid container direction="row">
          <Grid
            item
            xs={12}
            md={highlightColumns}
            container
            alignItems="center"
            className={classes.subscribeImageDiv}
          >
            <img
              src={source}
              alt="Subscribe"
              className={classes.subscribeImage}
            />
            <img
              src={blueCircles}
              alt="Subscribe"
              className={classes.circlesImage}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={descriptionColumns}
            className={classes.subscribeGrid}
          >
            <Typography
              color="textSecondary"
              variant="h2"
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography
              variant={descriptionVariant}
              color="textSecondary"
              className={classes.subtitle}
            >
              {description}
            </Typography>

            <Form selector="#mc_embed_signup" classes={{ root: classes.form }}>
              {config.settings.subscribe.embedCode}
            </Form>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

Subscribe.propTypes = {
  subscribe: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
  }),
  variant: PropTypes.oneOf(["compact", "full"]),
};

Subscribe.defaultProps = {
  subscribe: {
    title: "Subscribe",
    description: "Stay updated with the latest News, Research and Analysis",
  },
  variant: "full",
};
export default Subscribe;
