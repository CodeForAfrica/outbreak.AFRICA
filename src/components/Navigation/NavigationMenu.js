import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';

import Menu from './Menu';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0rem 6rem',
    [theme.breakpoints.up('md')]: {
      // margin: '2rem'
    }
  }
}));

function NavigationMenu() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItem="center"
      className={classes.root}
      spacing={3}
    >
      <Menu title="DATA" />
      <Menu title="INSIGHT" />
      <Menu title="RESEARCH" />

      <Search style={{ fontSize: 10 }} />

      <div>
        <Typography variant="caption">EN</Typography>
      </div>
      <div>
        <Typography variant="caption">FR</Typography>
      </div>
      <div>
        <Typography variant="caption">&#x0633;</Typography>
      </div>
    </Grid>
  );
}

export default NavigationMenu;
