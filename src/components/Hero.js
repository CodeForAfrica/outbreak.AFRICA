import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RichTypography from './RichTypography';
import Section from './Section';

import heroImage from '../assets/images/africanparliament.jpg';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: '2.25rem',
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  },
  root: {
    width: '100%',
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right bottom',
    backgroundSize: 'cover'
  },
  gradient: {
    backgroundImage: `linear-gradient(89deg, #ffffff 30%, rgba(255, 255, 255, 0)),
      linear-gradient(to bottom, #ffffff, transparent)`
  },
  hero: {
    flexGrow: 1
  },
  title: {
    margin: 0,
    width: '100%',
    paddingTop: '0.5625rem',

    // Some words are too big to fit mobile so break them
    wordBreak: 'break-all',
    [theme.breakpoints.up('md')]: {
      maxWidth: '40rem',
      wordBreak: 'initial'
    }
  },
  description: {
    marginTop: '1.0625rem',
    marginBottom: '3.125rem',
    width: '100%',
    '& a': {
      color: theme.palette.primary.main,
      fontWeight: 'bold'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '27.375rem'
    }
  }
}));

function Hero() {
  const classes = useStyles();
  if (!title || !tagline || !watchVideoLinkTitle) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div className={classes.gradient}>
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
    </div>
  );
}

export default Hero;
