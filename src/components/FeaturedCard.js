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
  author: {
    fontSize: 12,
    [breakpoints.up("md")]: {
      display: "block",
      fontSize: "initial",
      fontWeight: "bold",
      marginTop: typography.pxToRem((widths.values.md * 49) / widths.values.xl),
    },
  },
  date: {
    fontSize: 12,
    [breakpoints.up("md")]: {
      fontSize: "initial",
      marginTop: typography.pxToRem((widths.values.md * 50) / widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem((widths.values.lg * 50) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      marginTop: typography.pxToRem(50),
    },
  },
  description: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "flex",
      marginTop: typography.pxToRem((widths.values.md * 49) / widths.values.xl),
      "& p": {
        margin: 0,
      },
    },
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem((widths.values.lg * 49) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      marginTop: typography.pxToRem(49),
    },
  },
  image: {
    objectFit: "cover",
    minHeight: typography.pxToRem(160),
    width: "100%",
    [breakpoints.up("md")]: {
      maxHeight: typography.pxToRem(
        (widths.values.md * 547) / widths.values.xl
      ),
    },
    [breakpoints.up("lg")]: {
      maxHeight: typography.pxToRem(
        (widths.values.lg * 547) / widths.values.xl
      ),
    },
    [breakpoints.up("xl")]: {
      maxHeight: typography.pxToRem(547),
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
    fontSize: typography.subtitle2.fontSize,
    lineHeight: typography.subtitle2.lineHeight,
    [breakpoints.up("md")]: {
      fontWeight: 700,
    },
  },
}));

function FeaturedCard({ date: dateProp, description, image, title, ...props }) {
  const classes = useStyles(props);
  const date = dateProp && new Date(dateProp).toDateString().slice(4, 10);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={8}>
        <img src={image} alt={title} className={classes.image} />
      </Grid>
      <Grid item xs={12} md={4} className={classes.insight}>
        {title && (
          <Typography variant="subtitle1" className={classes.title}>
            {title}
          </Typography>
        )}
        {date && (
          <div className={classes.date}>
            <Typography variant="caption" className={classes.date}>
              {date}
            </Typography>
          </div>
        )}
        {description && (
          <RichTypography variant="body2" className={classes.description}>
            {description}
          </RichTypography>
        )}
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
