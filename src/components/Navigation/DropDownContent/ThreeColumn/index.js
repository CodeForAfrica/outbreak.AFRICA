import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import Articles from './Articles'
import Visualizations from './Visualizations'
import Publications from './Publications'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '30rem',
    padding: '2rem 5rem'
  },
  title: {
    padding: '1rem 0rem'
  }
}));

function HeaderTitle({ title }) {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h5" className={classes.title}>{title}</Typography>
      <Divider width={60} color="inherit" />
    </>
  )
}

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired
};


function ThreeColumnContent() {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between" className={classes.root} spacing={6}>
      <Grid item xs={3}>
        <HeaderTitle title="Articles" />
        <Articles />
      </Grid>

      <Grid item xs={6}>
        <HeaderTitle title="Visualizations" />
        <Visualizations />
      </Grid>

      <Grid item xs={3}>
        <HeaderTitle title="Annual Publications" />
        <Publications />
      </Grid >
    </Grid>
  );
}

ThreeColumnContent.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default ThreeColumnContent;
