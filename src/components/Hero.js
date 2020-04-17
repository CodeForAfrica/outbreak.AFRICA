import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Section from './Section';

import heroImage from '../assets/images/heropattern.png';
import coronaImage from '../assets/images/coronavirus.svg';

const useStyles = makeStyles(theme => ({
  section: {
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  },
  root: {
    width: '100%',
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0% 0%',
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '2rem'
    }
  },
  hero: {
    flexGrow: 1,
    backgroundImage: `url(${coronaImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '80% 20%',
    backgroundSize: '50%',
    margin: 'auto 1.375rem',
    [theme.breakpoints.up('md')]: {
      margin: 'auto 0',
      backgroundPosition:  '20% 90%',
      backgroundSize: '70% 75%',
    }

  },
  title: {
    margin: 0,
    width: '100%',
    fontFamily: 'Changa',
    paddingTop: '2.5625rem',
    textAlign: 'left',
    letterSpacing: 0,
    fontSize: '2rem',

    // Some words are too big to fit mobile so break them
   // wordBreak: 'break-all',
    [theme.breakpoints.up('md')]: {
      maxWidth: '54.935rem',
     // wordBreak: 'initial',
      paddingTop: '12.625rem',
      fontSize: '5rem',
    }
  },
  highlight: {
    background: 'linear-gradient(180deg,rgba(255,255,255,0) 50%, #F9FF71 50%)'
  },
  highlightBlue: {
    background: 'linear-gradient(180deg,rgba(255,255,255,0) 50%, #ccdcff 50%)'
  },
  description: {
    marginTop: '1.0625rem',
    marginBottom: '3.125rem',
    fontFamily: 'Open Sans',
    letterSpacing: 0,
    lineHeight: 1.2,
    width: '100%',
    '& a': {
      color: '#170F49',
      fontWeight: 'bold'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '41.12rem',
      fontSize: '1.875rem'
    }
  }
}));

function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          className={classes.hero}
        >
          <Grid item xs={12}>
            <Typography variant="h1" component="div"
              className={classes.title}
            >
              <span className={classes.highlight}>Contextual</span> data <br />
               with <span className={classes.highlight}>actionable</span> insights
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="div" className={classes.description}>
              Data driven analysis on <span className={classes.highlightBlue}>COVID-19</span>
              in more than <br /> 10 African countries. Find out more about us.
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

export default Hero;
