import React from 'react'
import { Grid, IconButton, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import email from 'assets/email.svg'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#170F49',
    width:'100%'
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
    padding: '2rem 2.5rem'
  },
   input: {
     color: 'white',  
     fontSize:'0.8rem',
     borderBottom:'1px solid white',

   },
   img:{
     height:'2.5rem'
   },
   button:{
     padding:0
   }
}));

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
            autoFocus={false}
            placeholder="Enter your email address"
            margin="normal"
            fullWidth
            InputProps={{ className: classes.input}}
          />
    
            <IconButton className={classes.button}>
              <img src={email} al="Arrow icon"  className={classes.img}/>
            </IconButton>
          
        </form>
      </div>
    </Grid>
  )
}

export default Subscribe
