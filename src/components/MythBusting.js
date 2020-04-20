import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Typography } from '@material-ui/core';

import illo from 'assets/images/illo-03.png';
import illoMobile from 'assets/images/illo-03-mobile.png';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#170F49'
  },
  description: {
    paddingTop: '12rem',
    paddingLeft: '5rem',
    paddingBottom: '12rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '3rem',
      paddingTop: '1rem',
      paddingLeft: '1rem'
    }
  },
  title: {
    color: 'white'
  },
  linkContainer: {
    paddingLeft: '5rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1rem',
      paddingBottom: '3rem'
    }
  },
  link: {
    color: 'yellow',
    textDecoration: 'none',
    fontWeight: 'bolder',
    borderBottom: '1px solid',
    paddingBottom: '3px'
  },
  subtitle: {
    '&.subtitle': {
      color: 'white'
    },
    '& .highlight': {
      background:
        "url(\"data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='1px' height='1px' viewBox='0 0 1 1' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='1' height='1' fill='white' fill-opacity='0.5' /%3E%3C/svg%3E\") no-repeat 100% 100%",
      backgroundSize: '100% 50%'
    }
  },
  imgContainer: {
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  mobileImgContainer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      maxWidth: '100%'
    }
  }
}));

function MythBursting({ title, description, linkText, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className={classes.description}>
            <div>
              <img
                src={illoMobile}
                alt="CoronaVirus Image"
                className={classes.mobileImgContainer}
              />
              <Typography variant="h2" className={classes.title}>
                {title}
              </Typography>
              <Typography
                variant="subtitle2"
                className={clsx(classes.subtitle, 'subtitle')}
                dangerouslySetInnerHTML={description()}
              />
            </div>
          </div>
          <div className={classes.linkContainer}>
            <Link href="/" className={classes.link} underline="none">
              {linkText}
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.imgContainer}>
          <img src={illo} alt="CoronaVirus Image" />
        </Grid>
      </Grid>
    </div>
  );
}

MythBursting.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.element.isRequired,
  linkText: PropTypes.string.isRequired
};

export default MythBursting;
