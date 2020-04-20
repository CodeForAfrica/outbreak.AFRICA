import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.primary.main,
    textAlign: 'center'
  },
  name: {
    color: 'inherit'
  },
  status: {
    color: 'inherit'
  },
  value: {
    ...theme.typography.h1,
    color: 'inherit'
  }
}));

function Status({ name, status, value, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="caption" component="h3" className={classes.status}>
          {status}
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant="body2" component="h2" className={classes.name}>
          {name}
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant="caption" component="h1" className={classes.value}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
}

Status.propTypes = {
  lang: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

Status.defaultProps = {
  lang: undefined
};

export default Status;
