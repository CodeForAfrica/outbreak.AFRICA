import React from "react";

import { Grid, Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { getFilterData } from "lib";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "3rem",
    flexGrow: 1,
  },
  button: {
    border: "1px solid grey",
    margin: "1rem",
    padding: "0.5rem 1.5rem",
    "&:hover": {
      backgroundColor: "#0050FF",
      color: "white",
    },
  },
  caption: {
    fontSize: "1rem",
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
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <div className={classes.filter}>
          <Typography variant="caption"> Filter: </Typography>
          <Grid item>
            {filterData.map((data) => (
              <Button size="small" rounded className={classes.button}>
                <Typography variant="caption" className={classes.caption}>
                  {data.topic}
                </Typography>
              </Button>
            ))}
          </Grid>
        </div>

        <Grid item>
          <Typography variant="caption" style={{ textDecoration: "underline" }}>
            Clear all
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default Filter;
