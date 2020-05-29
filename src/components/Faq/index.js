import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Subscribe from 'components/Partners/Subscribe';
import Services from 'components/Faq/FaqTopics/Services';
import About from 'components/Faq/FaqTopics/About';
import NewTopic from 'components/Faq/FaqTopics/NewTopic';
import Topic from 'components/Faq/FaqTopics/Topic';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    flexGrow: 1,
    padding: '1.5rem 0rem'
  },
  section: {},
  navGrid: {
    backgroundColor: '#EEEEEE',
    marginRight: 0,
    [breakpoints.up("md")]: {
      padding: '1.5rem',
      height: '362px'
    }
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
  }
}));

function FaqSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={10}>
        <Grid item xs={12} md={3}>
          <div className={classes.navGrid}>
            <Typography variant="subtitle2">one</Typography>
            <Typography variant="subtitle2">two</Typography>
            <Typography variant="subtitle2">three</Typography>
            <Typography variant="subtitle2">four</Typography>
          </div>
          <div className={classes.subscribeGrid}>
            <Subscribe />
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{ flexGrow: 1 }}>
          <About />
          <Services />
          <NewTopic />
          <Topic />
        </Grid>
      </Grid>

    </div>
  )
}

export default FaqSection
