import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  name: {
    color: "inherit",
    textTransform: "none",
  },
  status: {
    color: "inherit",
  },
  value: {
    color: "inherit",
    lineHeight: "6.25rem",
  },
}));

function Status({ name, status, value, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h6" component="h4" className={classes.status}>
          {status}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="button" component="h3" className={classes.name}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" className={classes.value}>
          {value.toLocaleString()}
        </Typography>
      </Grid>
    </Grid>
  );
}

Status.propTypes = {
  lang: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

Status.defaultProps = {
  lang: undefined,
};

export default Status;
