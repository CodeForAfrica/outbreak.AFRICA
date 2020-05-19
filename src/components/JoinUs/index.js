import React from 'react'

import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import img2 from 'assets/joinus-illo-1.svg'
import img1 from 'assets/joinus-illo-2.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: '3rem 0rem',
    padding: '1rem 0rem',
    backgroundColor: '#f9ff71'
  },
  section: {},
  container: {},
  contentContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'center',
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "flex-start"
    },
  },
  img1: {
    height: 'auto',
    width: '100%',
    maxHeight: '250px'
  },
  img2: {
    height: 'auto',
    width: '100%',
    maxHeight: '300px'
  },
  title: {
    fontSize: '2rem'
  },
  subtitle: {
    padding: '1rem 0rem'
  },
  divContainers: {
    padding: '3rem',
    [theme.breakpoints.up("md")]: {
      padding: 0,
    }
  }
}));

function JoinUs({ title, subtitle }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div classes={{ root: classes.section }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.container}>
          <Grid item xs={12} md={7} className={classes.contentContainer}>
            <div className={classes.divContainers}>
              <img src={img1} alt="img2" className={classes.img1} />
            </div>
            <div className={classes.divContainers}>
              <Typography variant="h3" className={classes.title}>{title}</Typography>
              <Typography variant="body1" className={classes.subtitle}>{subtitle}</Typography>
              <Button>Learn More</Button>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={classes.divContainers}>
              <img src={img2} alt="img1" className={classes.img2} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default JoinUs
