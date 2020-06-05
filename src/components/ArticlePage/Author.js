import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { A, RichTypography } from "@commons-ui/core";

import linkedIn from "assets/Icon awesome-linkedin-in-b.svg";
import twitter from "assets/Icon awesome-twitter-b.svg";
import websiteBlue from "assets/icon web.svg";

const useStyles = makeStyles(
  ({ breakpoints, palette, widths }) => ({
    icon: {
      objectFit: "contain",
      height: "1.375rem",
      width: "1.375rem",
    },
    link: {
      display: "inline-block",
      paddingRight: "1rem",
    },
    author: {},
    image: {
      width: "200px",
      height: "200px",
    },
    imageDiv: {
      width: "200px",
      height: "200px",
      borderRadius: "100px",
      overflow: "hidden",
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
    contentDiv: {
      [breakpoints.up("md")]: {
        paddingTop: "1.375rem",
        paddingLeft: "40px",
        paddingRight: "40px",
      },
    },
    description: {
      paddingTop: "3rem",
      paddingBottom: "2rem",
    },
    root: {
      backgroundColor: "#EEEEEE",
      boxShadow: "0px 4px 4px #00000029",
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
      [breakpoints.up("lg")]: {
        paddingTop: "48px",
        paddingBottom: "46px",
        marginBottom: "100px",
      },
    },
    title: {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    organisation: {
      fontWeight: "bold",
      display: "flex",
    },
    position: {
      fontWeight: "bold",
      display: "flex",
    },
  })
);

function Author({ author, ...props }) {
  const classes = useStyles(props);

  if (!author) {
    return null;
  }
  const { name, description, avatar_urls: avatar, acf: {position} } = author;
  return (
    <Grid container direction="row" alignItems="flex-start" justify="center" className={classes.root}>
      <Grid item className={classes.imageDiv}>
        <img src={avatar["96"]} alt="" className={classes.image} />
      </Grid>
      <Grid item xs={12} className={classes.contentDiv}>
        <Typography variant="subtitle2" className={classes.title}>
          {name}
        </Typography>
        <Typography variant="caption" className={classes.position}>
          {position}
        </Typography>
        <Typography variant="caption" className={classes.organisation}>
          Code For Africa
        </Typography>
        <RichTypography variant="caption" className={classes.description}>
          {description}
        </RichTypography>
        <Grid item className={classes.socialIcons}>
          <A href="" color="textSecondary" className={classes.link}>
            <img src={websiteBlue} alt="Website" className={classes.icon} />
          </A>
          <A href="" color="textSecondary" className={classes.link}>
            <img src={linkedIn} alt="LinkedIn" className={classes.icon} />
          </A>
          <A href="" color="textSecondary" className={classes.link}>
            <img src={twitter} alt="Twitter" className={classes.icon} />
          </A>
        </Grid>
      </Grid>
    </Grid>
  );
}

Author.propTypes = {
  author: PropTypes.shape({}).isRequired,
};

export default Author;
