import React from 'react'

import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import img2 from 'assets/joinus-illo-1.svg'
import img1 from 'assets/joinus-illo-2.svg'

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: '3rem 0rem',
    padding: "1rem 0rem",
    backgroundColor: '#f9ff71'
  },
  section: {},
  container: {},
  contentContainer: {
    dlexGrow: 1,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  img1: {
    height: 'auto',
    width: '100%',
    maxHeight: '200px'
  },
  img2: {
    height: 'auto',
    width: '100%',
    maxHeight: '300px'
  }
});

function JoinUs() {
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
          <Grid item xs={7} className={classes.contentContainer}>
            <div>
              <img src={img1} alt="img2" className={classes.img1} />
            </div>
            <Grid item>
              <Typography variant="h4">Join us</Typography>
              <Typography variant="body1">Be part of the movement</Typography>
              <Button>Learn More</Button>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <div>
              <img src={img2} alt="img1" className={classes.img2} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default JoinUs
