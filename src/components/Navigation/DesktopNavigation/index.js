import React from 'react';

import classNames from 'classnames';

import { Button, IconButton, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Search from './Search';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0rem 6rem',
    [theme.breakpoints.up('md')]: {
      // margin: '2rem'
    },
  },
  button: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(8),
    width: 'auto',
  },
  buttonLanguage: {
    color: '#9D9C9C',
    fontSize: '1.25rem',
    fontFamily: theme.typography.body1.fontFamily,
    lineHeight: 1.875,
    marginRight: 0,
    minWidth: 54,
    '&.active': {
      color: '#D6D6D6',
    },
  },
  buttonLanguageLast: {
    marginRight: '-5.5rem',
  },
  grow: {
    flexGrow: 1,
  },
}));

function DesktopNavigation() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.grow} />
      <Grid item>
        <Button variant="text" className={classes.button}>
          DATA
        </Button>
      </Grid>
      <Grid item>
        <Button variant="text" className={classes.button}>
          INSIGHT
        </Button>
      </Grid>
      <Grid item>
        <Button variant="text" className={classes.button}>
          RESEARCH
        </Button>
      </Grid>
      <Grid item>
        <Search style={{ fontSize: 20 }} />
      </Grid>
      <Grid item>
        <Button
          variant="text"
          className={classNames(
            classes.button,
            classes.buttonLanguage,
            'active'
          )}
        >
          En
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="text"
          className={classNames(classes.button, classes.buttonLanguage)}
        >
          Fr
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="text"
          className={classNames(
            classes.button,
            classes.buttonLanguage,
            classes.buttonLanguageLast
          )}
        >
          عربى
        </Button>
      </Grid>
    </>
  );
}

export default DesktopNavigation;
