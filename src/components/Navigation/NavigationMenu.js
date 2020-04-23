import React from 'react';

import { Grid, Typography } from '@material-ui/core'
import Search from './Search';

import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';

const useStyles = makeStyles({
  root: {
    margin: '0rem 6rem'
  },
  search: {
    fontSize: 10
  }
});

function NavigationMenu() {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between" alignItem="center" className={classes.root}>
      <Menu title="DATA" />
      <Menu title="INSIGHT" />
      <Menu title="RESEARCH" />
      <Search className={classes.search} />
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
  )
}

export default NavigationMenu;
