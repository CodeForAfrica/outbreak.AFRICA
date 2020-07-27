import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RichTypography } from "@commons-ui/core";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {
    marginBottom: 37.5,
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(
        (widths.values.md * 59) / widths.values.xl
      ),
    },
    [breakpoints.up("lg")]: {
      marginBottom: typography.pxToRem(
        (widths.values.lg * 59) / widths.values.xl
      ),
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
    fontSize: 12,
    [breakpoints.up("md")]: {
      fontSize: "initial",
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
  image: {
    objectFit: "cover",
    height: typography.pxToRem(160),
    width: "100%",
    [breakpoints.up("md")]: {
      height: typography.pxToRem((widths.values.md * 547) / widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem((widths.values.lg * 547) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      height: typography.pxToRem(547),
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
      paddingLeft: typography.pxToRem(
        (widths.values.md * 77) / widths.values.xl
      ),
    },
    [breakpoints.up("lg")]: {
      paddingLeft: typography.pxToRem(
        (widths.values.lg * 77) / widths.values.xl
      ),
    },
    [breakpoints.up("xl")]: {
      paddingLeft: typography.pxToRem(77),
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
        <img src={image} alt={title} className={classes.image} />
      </Grid>
      <Grid item xs={12} md={4} container className={classes.insight}>
        {title && (
          <Typography variant="subtitle2" className={classes.title}>
            {title}
          </Typography>
        )}
        {description && (
          <RichTypography variant="body2" className={classes.description}>
            {description}
          </RichTypography>
        )}
        <div className={classes.attributes}>
          <Typography variant="caption" className={classes.date}>
            {thisDate}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

FeaturedCard.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
};
FeaturedCard.defaultProps = {
  description: undefined,
  title: undefined,
  image: undefined,
  date: undefined,
};
export default FeaturedCard;
