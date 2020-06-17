import React from "react";
import PropTypes from "prop-types";

import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(({ palette }) => ({
  root: {},
  buttonGroup: {},
  button: {
    backgroundColor: "#fafafa",
    boxShadow: "0px 3px 6px #00000029",
    color: palette.secondary.main,
    marginRight: "1rem",
    "& button:last-of-type": {
      marginRight: 0,
    },
    "&:hover": {
      backgroundColor: "#fafafa",
    },
  },
}));

function CarouselButttonGroup({ next, previous, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Grid container justify="center" className={classes.buttonGroup}>
        <Grid item>
          <IconButton
            aria-label="back"
            color="secondary"
            className={classes.button}
            onClick={previous}
          >
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="forward"
            color="secondary"
            className={classes.button}
            onClick={next}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

CarouselButttonGroup.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};

export default CarouselButttonGroup;
