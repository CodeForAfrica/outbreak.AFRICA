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
    <div style={{position:'relative'}}>
      <Grid container direction="row" justify="flex-end" className={classes.root}>
        <Grid item style={{ position:'absolute' , left:"4rem", top:'34.10rem', width:'24%'}}>
          <JoinUs />
        </Grid>

        <Grid item style={{ width: '75%' }}>
          <PartnerGrid />
        </Grid>
      </Grid>

      <Grid item style={{ width: '30%', padding: '1rem 0rem ', top:'3px', margin:'0rem 4rem',position: 'absolute', zIndex: 9999 }}>
        <Subscribe />
      </Grid>
    </div >
  )
}

export default Partners
