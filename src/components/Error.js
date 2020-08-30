import React from "react";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import virus from "assets/subscribe-image.svg";
import outbreak404 from "assets/404.svg";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  section: {},
  mainContainer: {
    paddingTop: "2rem",
  },
  tagline: {
    maxWidth: typography.pxToRem(769),
  },
  virus: {
    height: "100%",
  },
  text404: {
    height: "16rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${outbreak404})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

function Error({ tagline, title, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.section}>
      <Grid container spacing={4} className={classes.mainContainer}>
        <Grid item xs={12} md={6}>
          <Typography variant='h1' className={classes.title}>
            {title}
          </Typography>
          <Typography variant='body1' className={classes.tagline}>
            {tagline}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.text404}>
            <img src={virus} alt='404' className={classes.virus} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Error.propTypes = {
  tagline: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Error.defaultProps = {
  tagline: undefined,
};

export default Error;
