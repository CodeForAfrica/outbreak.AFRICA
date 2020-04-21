import React from 'react'
import { Grid, IconButton, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import email from 'assets/email.svg'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#170F49'
  },
  typo: {
    color: 'white',
    //padding: '1rem 0rem'
  },
  body1:{
    color: 'white',
    padding:'1.5rem 4rem'
  }
});

function Subscribe() {
  const classes = useStyles()
  return (
    <Grid item className={classes.root}>
      <div style={{ margin: '3rem', paddingTop: '3rem' }}>
        <Typography variant="body2" className={classes.body1}>Subscribe</Typography>
        <Typography variant="body1" className={classes.body1}> Stay updated with the latest News, Research and Analysis</Typography>

        <div style={{ padding: '2rem 0rem' }}>
          <TextField
            id="standard-full-width"
            style={{ margin: 8, color: 'white',  padding:' 0rem 4rem' }}
            placeholder="Enter  your email address"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div style={{ padding:'0rem 4rem' }}>
            <IconButton>
              <img src={email} al="example"  style={{height:"2.5rem"}}/>
            </IconButton>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default Subscribe
