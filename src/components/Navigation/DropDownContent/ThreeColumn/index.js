import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import Articles from './Articles'
import Carousel from './Carousel'
import Publications from './Publications'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1rem 4rem',
  },
  title: {
    padding: '1rem 0rem',
    fontWeight: 'bolder'
  }
}));

function HeaderTitle({ title }) {
  const classes = useStyles()
  return (
    <>
      <Typography variant="body2" className={classes.title}>{title}</Typography>
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
    <Grid container direction="row" justify="space-between" className={classes.root}>
      <Grid item xs={12} md={3}>
        <HeaderTitle title="Articles" />
        <Articles />
      </Grid>

      <Grid item xs={12} md={6}>
        <HeaderTitle title="Visualizations" />
        <Carousel />
      </Grid>

      <Grid item xs={12} md={3}>
        <HeaderTitle title="Annual Publications" />
        <Publications />
      </Grid>
    </Grid >
  );
}

ThreeColumnContent.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default ThreeColumnContent;
