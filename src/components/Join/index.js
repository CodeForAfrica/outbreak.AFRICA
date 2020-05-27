import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from 'components/Join/Form';
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
  formGrid: {
    width: '100%'
  }
}));

function Content({ title, subtitle }) {
  return (
    <div style={{ margin: '5rem' }}>
      <Typography variant="h2" >{title}</Typography>
      <Typography variant="body1">
        {subtitle}
      </Typography>
    </div>
  )
}

function Join() {
  const classes = useStyles();
  return (
    <div>
      <Content
        title="JOIN US"
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
    </div>
  )
}

export default Join
