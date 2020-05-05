import React from 'react';

import { Grid, Typography, Button } from '@material-ui/core'
import { RichTypography } from "@commons-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { getFilterData } from 'lib'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4rem 0rem',
    flexGrow: 1
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
    //marginLeft: '20rem'
  },
  caption: {
    fontSize: '1rem'
  },
  filterGrid: {
    padding: '0rem 1rem'
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}));

function Filter() {
  const classes = useStyles()
  const filterData = getFilterData()
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <RichTypography variant="h2">Featured Experts</RichTypography>
      </Grid>

      <Grid container direction="row" justify="space-between" alignItems="center" className={classes.filterGrid}>
        <div className={classes.filter} >
          <Typography variant="caption"> Filter: </Typography>
          {filterData.map(data =>
            <Grid item xs={12} md={4}>
              <Button size="small" rounded className={classes.button}>
                <Typography variant="caption" className={classes.caption}>{data.topic}</Typography>
              </Button>
            </Grid>
          )}
        </div>


        <Grid item>
          <Typography variant="caption" style={{ textDecoration: 'underline' }}>Clear all</Typography>
        </Grid>
      </Grid>

    </div >
  )
}
export default Filter
