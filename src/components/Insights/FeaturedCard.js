import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RichTypography } from "@commons-ui/core";

import logo from "assets/logo-C4A.svg";

const useStyles = makeStyles(({ breakpoints, widths }) => ({
  root: {
    marginBottom: 37.5,
    [breakpoints.up("md")]: {
      marginBottom: (widths.values.md * 59) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      marginBottom: (widths.values.lg * 59) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      marginBottom: 59,
    },
  },
  attributes: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
  },
  author: {
    fontSize: 12,
    [breakpoints.up("md")]: {
      display: "block",
      fontSize: "initial",
      fontWeight: "bold",
    },
  },
  date: {
    paddingLeft: 7,
    fontSize: 12,
    [breakpoints.up("md")]: {
      fontSize: "initial",
      paddingLeft: 0,
    },
  },
  description: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "initial",
      "& p": {
        margin: 0,
      },
    },
  },
  featuredImage: {
    width: "100%",
    height: 160,
    [breakpoints.up("md")]: {
      height: (widths.values.md * 547) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      height: (widths.values.lg * 547) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      height: 547,
    },
  },
  logo: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "initial",
    },
  },
  insight: {
    alignItems: "flex-start",
    [breakpoints.up("md")]: {
      paddingLeft: (widths.values.md * 77) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      paddingLeft: (widths.values.lg * 77) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      paddingLeft: 77,
    },
  },
  readAttr: {
    paddingTop: 7,
    [breakpoints.up("md")]: {
      paddingLeft: (widths.values.md * 74) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      paddingLeft: (widths.values.lg * 74) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      paddingLeft: 74,
    },
  },
  title: {
    fontWeight: "normal",
    [breakpoints.up("md")]: {
      fontWeight: "bold",
    },
  },
}));

function FeaturedCard({ date, description, image, title, ...props }) {
  const classes = useStyles(props);
  const thisDate = new Date(date).toDateString().slice(4, 10);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={8}>
        <img src={image} alt={title} className={classes.featuredImage} />
      </Grid>
      <Grid item xs={12} md={4} container className={classes.insight}>
        {title && (
          <Typography variant="subtitle2" className={classes.title}>
            {title}
          </Typography>
        )}
        {description && (
          <RichTypography variant="caption" className={classes.description}>
            {description}
          </RichTypography>
        )}
        <div className={classes.attributes}>
          <img src={logo} alt="Code for Africa" className={classes.logo} />
          <div className={classes.readAttr}>
            <Typography variant="caption" className={classes.author}>
              Code for Africa
            </Typography>
            <Typography variant="caption" className={classes.date}>
              {thisDate}
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

FeaturedCard.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default FeaturedCard;
