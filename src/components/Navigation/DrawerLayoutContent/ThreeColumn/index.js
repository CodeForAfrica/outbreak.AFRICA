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
import Divider from '@material-ui/core/Divider';

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
        <Typography variant="h5" style={{ padding: '0.5rem 0rem' }}>Articles</Typography>
        <Divider width={60} />
        <LeftColumn />
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h5" style={{ padding: '0.5rem 0rem' }}>Visualizations</Typography>
        <Divider width={60} color="primary" />
        <MiddleColumn />
      </Grid>

      <Grid item xs={3}>
        <Typography variant="h5" style={{ padding: '0.5rem 0rem' }}>Annual Publications</Typography>
        <Divider width={60} />
        <RightColumn />
      </Grid >
    </Grid>
  );
}

ThreeColumn.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(ThreeColumn);
