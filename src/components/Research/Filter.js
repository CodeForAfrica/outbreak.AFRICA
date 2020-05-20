import React from "react";

import { Grid, Typography, Button } from "@material-ui/core";
import { RichTypography } from "@commons-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { getFilterData } from "lib";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4rem 0rem",
    flexGrow: 1,
  },
  button: {
    border: "1px solid grey",
    margin: "0.5rem",
    fontSize: '14px',
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#0050FF",
      color: "white",
    },
  },
  caption: {
    margin: '1rem'
  },
  filter: {
    display: "flex",
    padding: "2rem 0rem",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexGrow: 0,
      padding: 0,
    },
  },
}));

function Filter() {
  const classes = useStyles();
  const filterData = getFilterData();
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <RichTypography variant="h2">Featured Experts</RichTypography>
      </Grid>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <div className={classes.filter}>
          <Grid item xs={12}>
            {filterData.map((data) => (
              <Button size="small" rounded className={classes.button}>
                {data.topic}
              </Button>
            ))}
          </Grid>

          <Grid item xs={12} style={{ paddingTop: '1rem' }}>
            {filterData.map((data) => (
              <Typography variant="caption" className={classes.caption}>
                {data.subtopic}
              </Typography>
            ))}
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
export default Filter;
