import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import africaarxiv from '../../assets/partnerLogos/africaarxiv/africaarxiv.png';
import africapractice from '../../assets/partnerLogos/africapractice/africapractice.png';
import aosh from '../../assets/partnerLogos/aosh/aosh.png';
import asi from '../../assets/partnerLogos/asi/asi.png';
import asln from '../../assets/partnerLogos/asln/asln.png';
import pesacheck from '../../assets/partnerLogos/pesacheck/pesacheck.png';
import takwimu from '../../assets/partnerLogos/takwimu/takwimu.png';
import wanadata from '../../assets/partnerLogos/wanadata/wanadata.png';


const useStyles = makeStyles({
  root: {
    backgroundColor: '#fcfc74',
  },
  typogrid: {
    //padding: '2rem 3rem',
    padding: '2rem 10rem'

  },
  typo: {
    color: 'white',
    padding: '1rem 0rem'
  }
});

function PartnersGrid() {
  const classes = useStyles()
  return (
    <Grid className={classes.root}>
      <div className={classes.typogrid}>
        <Typography variant="h4">Our Partners</Typography>
      </div>

      <Grid container direction="row" style={{ padding: '2rem 10rem' }}>
        <Grid item xs={6}>
          <img src={africaarxiv} alt="Africa Ar Xvi" />
          <Typography variant="caption"> Lorem ipsum is simply dummy text of the printing and typeseting industry</Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={takwimu} alt="Takwimu" />
          <Typography variant="caption">Lorem ipsum is simply dummy text of the printing and typeseting industry</Typography>
        </Grid>

        <Grid item xs={6}>
          <img src={africapractice} alt="Africa Practice" />
          <Typography variant="caption">Lorem ipsum is simply dummy text of the printing and typeseting industry</Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={pesacheck} alt="Pesacheck" />
          <Typography variant="caption">Lorem ipsum is simply dummy text of the printing and typeseting industry</Typography>
        </Grid>

        <Grid item xs={6}>
          <img src={asi} alt="African Science Initiative" />
          <Typography variant="caption">Lorem ipsum is simply dummy text of the printing and typeseting industry</Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={aosh} alt="Africa Open Science Hardware" />
          <Typography variant="caption">Lorem ipsum is simply dummy text of the printing and typeseting industry</Typography>
        </Grid>

        <Grid item xs={6}>
          <img src={asln} alt="Africa Science Literacty Network" />
          <Typography variant="caption">Lorem ipsum is simply dummy text of the printing and typeseting industry</Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={wanadata} alt="Wanadata" />
          <Typography variant="caption">Lorem ipsum is simply dummy text of the printing and typeseting industry</Typography>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default PartnersGrid
