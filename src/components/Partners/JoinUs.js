import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#cbdbfb'
  },
  typogrid: {
    padding: '2rem 3rem'

  },
  typo: {
    color: 'white',
    padding: '1rem 0rem'
  }
});

function JoinUs() {
  const classes = useStyles()
  return (
    <Grid item className={classes.root}>
      <div className={classes.typogrid}>
        <Typography variant="body2">Join us</Typography>
        <Typography variant="body1">Be part of the initiative</Typography>
        <Typography variant="subtitle1">Learn more</Typography>
      </div>



    </Grid>
  )
}

export default JoinUs
