import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';


import { withWidth } from '@material-ui/core';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
import { isWidthUp } from '@material-ui/core/withWidth';

import africaarxiv from 'assets/partnerLogos/africaarxiv/africaarxiv.png';
import africapractice from 'assets/partnerLogos/africapractice/africapractice.png';
import aosh from 'assets/partnerLogos/aosh/aosh.png';
import asi from 'assets/partnerLogos/asi/asi.png';
import asln from 'assets/partnerLogos/asln/asln.png';
import pesacheck from 'assets/partnerLogos/pesacheck/pesacheck.png';
import takwimu from 'assets/partnerLogos/takwimu/takwimu.png';
import wanadata from 'assets/partnerLogos/wanadata/wanadata.png';


const useStyles = makeStyles(theme=> ({
  root: {
    backgroundColor: '#fcfc74',
  },
  typogrid: {
    padding: '2rem 4rem',
    [theme.breakpoints.up('md')]: {
      padding: '3rem 10rem'
    }
  },
  imageGrid:{
    padding: '2rem 6rem',
    display:'flex',
    [theme.breakpoints.up('md')]: {
      padding: '2rem 10rem'
    }
  },
  typo: {
    color: 'white',
    padding: '1rem 0rem'
  },
  title:{
    fontSize:'3rem',
    fontWeight:700
  },
  img: {
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      height:'2.8rem'
    }
  },
  image:{
    [theme.breakpoints.up('md')]: {
      height: '100px',
      marginTop: '-2rem'
    }
  },
  descGrid:{
    paddingTop: '1rem'
  }
}));

const partners =[
  {
    name:'Africa Ar Xiv',
    image:`${africaarxiv}`,
    description:'Lorem ipsum is simply dummy text of the printing and typeseting industry'
  },
  {
    name:'Takwimu',
    image:`${takwimu}`,
    description:'Lorem ipsum is simply dummy text of the printing and typeseting industry'
  },
  {
    name:'Africa Practice',
    image:`${africapractice}`,
    description:'Lorem ipsum is simply dummy text of the printing and typeseting industry'
  },
  {
    name:'PesaCheck',
    image:`${pesacheck}`,
    description:'Lorem ipsum is simply dummy text of the printing and typeseting industry'
  },
  {
    name:'African Science Initiative',
    image:`${asi}`,
    description:'Lorem ipsum is simply dummy text of the printing and typeseting industry'
  },
  {
    name:'Africa Open Science Hardware',
    image:`${aosh}`,
    description:'Lorem ipsum is simply dummy text of the printing and typeseting industry'
  },
  {
    name:'African Science Literacy Network',
    image:`${asln}`,
    description:'Lorem ipsum is simply dummy text of the printing and typeseting industry'
  },
  {
    name:'Wanadata',
    image:`${wanadata}`,
    description:'Lorem ipsum is simply dummy text of the printing and typeseting industry'
  }
]

function PartnersGrid({ width, ...props }) {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={classes.typogrid}>
        <Typography variant="h2" className={classes.title}>Our Partners</Typography>
      </div>

      <Grid container direction="row" className={classes.imageGrid} justify="center" spacing={10}>
        {partners.map(partner => 
         <Grid item xs={12} md={6}>
          <img src={partner.image} alt={partner.name} className={partner.image === `${africaarxiv}` ? classes.image : classes.img} />
          
          <div className={classes.descGrid}>
            {isWidthUp('md', width) ? <Typography variant="caption">{partner.description}</Typography> : null}
          </div>
        </Grid>
        )}
      </Grid>
    </div>
  )
}

PartnersGrid.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth({initialWidth: 'md'})(PartnersGrid);
