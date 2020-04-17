import React from 'react';

import { Grid, Typography } from '@material-ui/core'
import Search from './Search';

import { makeStyles } from '@material-ui/core/styles';
import DropDownMenu from './DropdownMenu';

const useStyles = makeStyles({
  root: {
    margin: '0rem 6rem'
  }
});

function NavigationMenu() {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between" alignItem="center" className={classes.root}>
      <DropDownMenu title="DATA" />
      <DropDownMenu title="INSIGHT" />
      <DropDownMenu title="RESEARCH" />

      <Search style={{ fontSize: 10 }} />

      <div><Typography variant="caption">EN</Typography></div>
      <div><Typography variant="caption">FR</Typography></div>
      <div><Typography variant="caption">&#x0633;</Typography></div>

    </Grid>
  )
}

export default NavigationMenu;
