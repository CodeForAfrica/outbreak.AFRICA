import React from 'react'
import { Grid, IconButton, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import email from 'assets/email.svg'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#170F49'
  },
  mainContainer:{
    margin: '3rem', 
    paddingTop: '3rem' 
  },
  typo: {
    color: 'white',
  },
  body1:{
    color: 'white',
    padding:'1.5rem 2rem'
  },
 title:{
    color: 'white',
    padding:'1.5rem 2rem',
    fontSize:'3rem',
    fontWeight:700
  },
  form:{
    padding: '2rem 0rem'
  },
   input: {
     margin: 8, 
     color: 'white',  
     padding:' 0rem 2rem'
   },
   img:{
     height:'2.5rem'
   },
   iconGrid:{
     padding:'0rem 2rem' 
   }
});

function Subscribe() {
  const classes = useStyles()
  return (
    <Grid item className={classes.root}>
      <div className={classes.mainContainer}>
        <Typography variant="h2" className={classes.title}>Subscribe</Typography>
        <Typography variant="body1" className={classes.body1}> Stay updated with the latest News, Research and Analysis</Typography>

        <form className={classes.form}>
          <TextField
            id="standard-basic"
            className={classes.input}
            placeholder="Enter  your email address"
            margin="normal"
            InputLabelProps={{
              shrink:true
            }}
          />
          <div className={classes.iconGrid}>
            <IconButton>
              <img src={email} al="example"  className={classes.img}/>
            </IconButton>
          </div>
        </form>
      </div>
    </Grid>
  )
}

export default Subscribe
