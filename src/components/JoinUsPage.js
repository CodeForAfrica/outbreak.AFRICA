import React from 'react';

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Form from 'components/Form';
import Subscribe from 'components/Partners/Subscribe'

const useStyles = makeStyles(({ breakpoints }) => ({

  root: {
    padding: '3rem 0rem',
    flexGrow: 1
  },
  subscribeGrid: {
    backgroundColor: '#170F49',
    height: 'auto',
    padding: '4rem',
    width: '100%',
    marginRight: 0,
    order: 2,
    [breakpoints.up("md")]: {
      padding: '1.5rem',
      marginRight: '10rem',
      height: '614px',
      order: 1,
    }
  },
  contentGrid: {
    padding: "1rem 0rem",
    marginLeft: '5rem'
  },
  formGrid: {
    width: '100%',
    order: 1,
    [breakpoints.up("md")]: {
      order: 2
    }
  }
}));

function JoinUsPage(props) {
  const classes = useStyles(props);
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      className={classes.root}>
      <Grid
        item
        xs={12}
        md={3}
        className={classes.subscribeGrid}>
        <Subscribe />
      </Grid>
      <Grid
        item xs={12}
        md={6}
        className={classes.formGrid}>
        <Form />
      </Grid>
    </Grid>
  )
}

export default JoinUsPage
