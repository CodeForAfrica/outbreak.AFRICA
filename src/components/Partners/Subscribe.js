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
    padding: '1rem 0rem'
  }
});

function Subscribe() {
  const classes = useStyles()
  return (
    <Grid item className={classes.root}>
      <div style={{ margin: '3rem', padding: '3rem 0' }}>
        <Typography variant="body2" className={classes.typo}>Subscribe</Typography>
        <Typography variant="body1" className={classes.typo}> Stay updated with the latest News, Research and Analysis</Typography>

        <div style={{ padding: '2rem 0rem' }}>
          <TextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 8, color: 'white' }}
            placeholder="Enter  your email address"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div>
            <IconButton>
              <img src={email} al="example" />
            </IconButton>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default Subscribe
