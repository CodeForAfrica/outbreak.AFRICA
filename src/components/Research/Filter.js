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
  button: {
    border: '1px solid grey',
    margin: '1rem',
    padding: '0.5rem 1.5rem',
    "&:hover": {
      backgroundColor: "#0050FF",
      color: 'white'
    }
  },
  lastTypo: {
    marginLeft: '42rem'
  },
  caption: {
    fontSize: '1rem'
  }

}));

function Filter() {
  const classes = useStyles()
  const filterData = getFilterData()
  return (
    <div className={classes.heading}>
      <Grid item xs={12}>
        <RichTypography variant="h2">Featured Experts</RichTypography>
      </Grid>

      <Grid container item xs={12} direction="row" justify="flex-start" alignItems="center" spacing={3}>
        <Typography variant="caption"> Filter: </Typography>
        {filterData.map(data =>
          <Grid item xs={3} sm={6} md={1}>
            <Button size="small" rounded className={classes.button}>
              <Typography variant="caption" className={classes.caption}>{data.topic}</Typography>
            </Button>
          </Grid>
        )}
        <Grid item className={classes.lastTypo}>
          <Typography variant="caption" style={{ textDecoration: 'underline' }}>Clear all</Typography>
        </Grid>
      </Grid>
    </div>
  )
}
export default Filter
