import React from 'react';

import { PropTypes } from 'prop-types';

import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles'

import Subscribe from './Subscribe';
import PartnerGrid from './PartnersGrid';
import JoinUs from './JoinUs';

const useStyles = makeStyles( theme =>({
  root: {
    position:'relative',
     [theme.breakpoints.up('md')]: {
       margin:'3rem',
    }
  },
  desktopContainer:{
    padding: '2rem 6rem'
  },
  joinUs:{
    position:'absolute',
    left:"4rem", 
    top:'34rem', 
    width:'100%'
  },
  partner:{
    width: '75%'
  },
  subscribe:{
    width: '30%', 
    padding: '1rem 0rem ', 
    top:'3px', 
    margin:'0rem 4rem',
    position: 'absolute', 
    zIndex: 9999 
  }
}));

function Partners() {
  const classes = useStyles();
  const theme = useTheme();
  const renderDesktopPartner = ()=> {
    const classes = useStyles()
    return (
      <>
      <Grid container direction="row" justify="flex-end" className={classes.desktopContainer}>
          <Grid item className={classes.joinUs} >
            <JoinUs />
          </Grid>
          <Grid className={classes.partner}>
            <PartnerGrid />
          </Grid>
      </Grid>
      <Grid item className={classes.subscribe}>
        <Subscribe />
      </Grid>
      </>
    )
  }
  const rendeMobilePartner = () => {
    const classes = useStyles()
    return (
     <Grid container direction="row">
        <PartnerGrid/>
        <Subscribe/>
        <JoinUs/>  
      </Grid>
    )
  }
  return (
    <div className={classes.root}>
      {useMediaQuery(theme.breakpoints.up('md')) ? renderDesktopPartner() : rendeMobilePartner()}
    </div >
  )
}

export default Partners;
