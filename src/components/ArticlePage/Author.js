import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { A, RichTypography } from "@commons-ui/core";

import linkedIn from "@/outbreakafrica/assets/Icon awesome-linkedin-in-b.svg";
import twitter from "@/outbreakafrica/assets/Icon awesome-twitter-b.svg";
import websiteBlue from "@/outbreakafrica/assets/icon web.svg";

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, widths }) => ({
    icon: {
      objectFit: "contain",
      height: "1.375rem",
      width: "1.375rem",
    },
    link: {
      display: "inline-block",
      paddingRight: "1rem",
      [breakpoints.up("md")]: {
        paddingRight: "0.75rem",
      },
      [breakpoints.up("lg")]: {
        paddingRight: "1rem",
      },
    },
    author: {},
    image: {
      width: typography.pxToRem(200),
      height: typography.pxToRem(200),
      borderRadius: typography.pxToRem(100),
      position: "relative",
      "&:after": {
        backgroundColor: palette.primary.main,
        bottom: 0,
        content: '""',
        left: 0,
        mixBlendMode: "multiply",
        opacity: 0.3,
        position: "absolute",
        right: 0,
        top: 0,
      },
    },
    imageDiv: {
      overflow: "hidden",
    },
    contentDiv: {
      padding: "2.1875rem 1.6875rem 0",
      [breakpoints.up("md")]: {
        paddingTop: "1.375rem",
        paddingLeft: typography.pxToRem(40),
        paddingRight: typography.pxToRem(40),
      },
    },
    description: {
      paddingTop: "1rem",
    },
    root: {
      backgroundColor: "#EEEEEE",
      boxShadow: "0px 4px 4px #00000029",
      marginBottom: typography.pxToRem(50),
      paddingTop: typography.pxToRem(48),
      paddingBottom: typography.pxToRem(46),
      [breakpoints.up("md")]: {
        paddingTop: (widths.values.md * 48) / widths.values.xl,
        paddingBottom: (widths.values.md * 46) / widths.values.xl,
        marginBottom: (widths.values.md * 100) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        paddingTop: (widths.values.lg * 48) / widths.values.xl,
        paddingBottom: (widths.values.lg * 46) / widths.values.xl,
        marginBottom: (widths.values.lg * 100) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        paddingTop: typography.pxToRem(48),
        paddingBottom: typography.pxToRem(46),
        marginBottom: typography.pxToRem(100),
      },
    },
    socialIcons: {
      paddingTop: "2rem",
    },
    title: {
      fontWeight: "bold",
      textTransform: "uppercase",
      paddingBottom: "0.5rem",
    },
    organisation: {
      fontWeight: "bold",
      display: "flex",
      paddingBottom: "3rem",
    },
    position: {
      fontWeight: "bold",
      display: "flex",
      paddingBottom: "0.5rem",
    },
  })
);

function Author({ author, variant, ...props }) {
  const classes = useStyles(props);

  if (!author) {
    return null;
  }
  const {
    name,
    description,
    avatar_urls: avatar,
    acf: {
      linkedin: linkedInUrl,
      position,
      twitter: twitterUrl,
      website: websiteUrl,
    },
  } = author;
  const hasSocialLinks = linkedInUrl || twitterUrl || websiteUrl;
  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      justify="center"
      className={classes.root}
    >
      <Grid
        item
        md={variant === "full" ? 5 : undefined}
        className={classes.imageDiv}
      >
        <img src={avatar["96"]} alt="" className={classes.image} />
      </Grid>
      <Grid
        item
        xs={12}
        md={variant === "full" ? 7 : undefined}
        container
        className={classes.contentDiv}
      >
        <RichTypography variant="subtitle2" className={classes.title}>
          {name}
        </RichTypography>
        <RichTypography variant="caption" className={classes.position}>
          {position}
        </RichTypography>
        {variant === "compact" && (
          <RichTypography variant="caption" className={classes.description}>
            {description}
          </RichTypography>
        )}
        {hasSocialLinks && (
          <Grid item className={classes.socialIcons}>
            {websiteUrl && (
              <A
                href={websiteUrl}
                color="textSecondary"
                className={classes.link}
              >
                <img src={websiteBlue} alt="Website" className={classes.icon} />
              </A>
            )}
            {linkedInUrl && (
              <A
                href={linkedInUrl}
                color="textSecondary"
                className={classes.link}
              >
                <img src={linkedIn} alt="LinkedIn" className={classes.icon} />
              </A>
            )}
            {twitterUrl && (
              <A
                href={twitterUrl}
                color="textSecondary"
                className={classes.link}
              >
                <img src={twitter} alt="Twitter" className={classes.icon} />
              </A>
            )}
          </Grid>
        )}
      </Grid>
      {variant === "full" && (
        <Grid item md={12}>
          <RichTypography variant="caption" className={classes.description}>
            {description}
          </RichTypography>
        </Grid>
      )}
    </Grid>
  );
}

Author.propTypes = {
  author: PropTypes.shape({}).isRequired,
  variant: PropTypes.oneOf(["compact", "full"]),
};

Author.defaultProps = {
  variant: "compact",
};

export default Author;
