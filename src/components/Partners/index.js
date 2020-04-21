import React from 'React';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Subscribe from './Subscribe';
import PartnerGrid from './PartnersGrid';
import JoinUs from './JoinUs';

const useStyles = makeStyles({
  root: {
    padding: '2rem 6rem'
  }
});

function Partners() {
  const classes = useStyles()
  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item style={{ width: '35%', padding: '1rem 0rem ' }}>
        <Subscribe />
      </Grid>
      <Grid item style={{ width: '65%' }}>
        <PartnerGrid />
      </Grid>
    </Grid>
  )
}

export default Partners
