import React from 'react';

import classNames from "classnames";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";
import Content from 'components/Content';

import Form from 'components/Form';
import Subscribe from 'components/Partners/Subscribe'

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    flexGrow: 1
  },
  containerGrid: {
    padding: '3rem 0rem'
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
      height: '614px',
      marginRight: '10rem',
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

function SubscribePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Section>
        <Grid
          container
          direction="row"
          justify="flex-start"
          className={classes.containerGrid}>
          <Grid
            item
            xs={12}
            md={3}
            className={classes.subscribeGrid}>
            <Subscribe />
          </Grid>
          <Grid item xs={12} md={6} className={classes.formGrid}>
            <Form />
          </Grid>
        </Grid>
      </Section>
    </div>
  )
}

export default SubscribePage
