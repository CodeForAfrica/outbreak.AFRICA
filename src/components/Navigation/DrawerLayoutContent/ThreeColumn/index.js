import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import LeftColumn from './LeftColumn'
import MiddleColumn from './MiddleColumn'
import RightColumn from './RightColumn'

const styles = theme => ({
  root: {
    height: '30rem',
    padding: '3rem'
  }
});

function ThreeColumn({ classes }) {
  return (
    <Grid container direction="row" justify="space-between" className={classes.root} spacing={6}>
      <Grid item xs={3}>
        <Typography>Title one</Typography>
        <LeftColumn />
      </Grid>

      <Grid item xs={6}>
        <Typography>Title two</Typography>
        <MiddleColumn />

      </Grid>
      <Grid item xs={3}>
        <Typography>title three</Typography>
        <RightColumn />
      </Grid >
    </Grid>
  );
}

ThreeColumn.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(ThreeColumn);
