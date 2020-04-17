import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RichTypography from './RichTypography';
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
    backgroundImage: `url(${heroImage}), url(${coronaImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0% 0%, 40% 70%',
    backgroundSize: 'cover, 65% 75%'
  },
  hero: {
    flexGrow: 1
  },
  title: {
    margin: 0,
    width: '100%',
    fontFamily: 'Changa',
    paddingTop: '0.5625rem',
    textAlign: 'left',
    letterSpacing: 0,

    // Some words are too big to fit mobile so break them
    wordBreak: 'break-all',
    [theme.breakpoints.up('md')]: {
      maxWidth: '54.9375rem',
      wordBreak: 'initial',
      paddingTop: '12.625rem'
    }
  },
  description: {
    marginTop: '1.0625rem',
    marginBottom: '3.125rem',
    fontFamily: 'Open Sans',
    letterSpacing: 0,
    width: '100%',
    '& a': {
      color: '#170F49',
      fontWeight: 'bold'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '41.125rem',
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
            <RichTypography
              component="div"
              variant="h1"
              className={classes.title}
            >
              Contextual data with actionable insights
            </RichTypography>
          </Grid>
          <Grid item xs={12}>
            <RichTypography component="div" className={classes.description}>
              Data driven analysis on COVID-19 in more than 10 African countries. Find out more about us.
            </RichTypography>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

export default Hero;
