import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#cbdbfb'
  },
  typogrid: {
    padding: '2rem 4rem'
  },
  typo: {
    color: 'white',
    //padding: '1rem 0rem'
  },
  link:{
    textDecoration:'underline'
  },
  title:{
    fontSize:'3rem',
    fontWeight:700,
    padding:'1rem 0rem'
  }
});

function JoinUs() {
  const classes = useStyles()
  return (
      <div className={classes.root}>
        <div className={classes.typogrid}>
        <Typography variant="h2" className={classes.title}>Join us</Typography>
        <Typography variant="body1">Be part of the initiative</Typography>
        <Typography variant="h6" className={classes.link}>LEARN MORE</Typography>
        </div>
      </div>
  )
}

export default JoinUs
