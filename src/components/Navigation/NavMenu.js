import React from 'react';

import { Grid, Typography } from '@material-ui/core'
import Search from './Search';

import { makeStyles } from '@material-ui/core/styles';
//import LanguageMenu from './LanguageMenu';

const useStyles = makeStyles({
  root: {
    margin: '0rem 4rem'
  }
});

function NavMenu() {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between" alignItem="center" className={classes.root}>
      <div>item one</div>
      <div>item two</div>
      <div>item three</div>
      <Search />
      <div><Typography>EN</Typography></div>
      <div><Typography>FR</Typography></div>
      <div><Typography>&#x0633;</Typography></div>
    </Grid>
  )
}

export default NavMenu;
