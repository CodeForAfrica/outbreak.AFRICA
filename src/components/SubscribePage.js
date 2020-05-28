import React from 'react';

import classNames from "classnames";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import Form from 'components/Form';
import Subscribe from 'components/Partners/Subscribe'

const useStyles = makeStyles(({ breakpoints }) => ({
  containerGrid: {
    padding: '3rem 0rem'
  },
  subscribeGrid: {
    backgroundColor: '#170F49',
    height: 'auto',
    padding: '4rem',
    width: '100%',
    [breakpoints.up("md")]: {
      padding: '1.5rem',
      height: '614px',
    }
  },
  contentGrid: {
    padding: "1rem 0rem",
    marginLeft: '5rem'
  },
  formGrid: {
    width: '100%'
  }
}));

function Content({ title, subtitle }) {
  const classes = useStyles();
  return (
    <div className={classes.contentGrid}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">
        {subtitle}
      </Typography>
    </div>
  )
}

function SubscribePage() {
  const classes = useStyles();
  return (
    <div>
      <Section classes={{ root: classes.section }}>
        <Content
          title="Subscribe"
          subtitle="Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. It was popularised in the 1960s 
        with the release of Letraset sheets containing Lorem Ipsum"
        />
        <Grid
          container
          direction="row"
          justify="space-between"
          className={classes.containerGrid}>
          <Grid
            item
            xs={12}
            md={3}
            className={classes.subscribeGrid}>
            <Subscribe />
          </Grid>
          <Grid item xs={12} md={8} className={classes.formGrid}>
            <Form />
          </Grid>
        </Grid>
      </Section>
    </div>
  )
}

export default SubscribePage
