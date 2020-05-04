import React from 'react';

import { Grid, Typography, Button } from '@material-ui/core'
import { RichTypography } from "@commons-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { getFilterData } from 'lib'

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    padding: '4rem 0rem'
  },
  buttonGrid: {
    margin: '1rem'
  },
  button: {
    border: '1px solid grey',
    margin: '1rem',
    padding: '0.5rem 1.5rem'

  }
}));

function Filter() {
  const classes = useStyles()
  const filterData = getFilterData()
  return (
    <Grid
      container
      className={classes.heading}
      justify="flex-start"
      alignItems="center"
    >
      <Grid item xs={12}>
        <RichTypography variant="h2">
          Featured Experts
        </RichTypography>
      </Grid>

      <Typography variant="body2"> Filter: </Typography>
      {filterData.map(data =>
        <div className={classes.buttonGrid}>
          <Button size="small" rounded className={classes.button}>
            <Typography variant="caption" style={{ fontSize: '1rem' }}>{data.topic}</Typography>
          </Button>
        </div>
      )}

    </Grid>

  )
}
export default Filter
