import React, { useState } from "react";

import { Grid, Hidden, Button } from "@material-ui/core";
import { RichTypography } from "@commons-ui/core";
import Link from "components/Link";

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
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#0050FF",
      color: "white",
    },
  },
  caption: {
    fontWeight: 700,
    color: '#9D9C9C',
    margin: '1rem',
    textDecoration: 'none',
    "&:hover": {
      textDecoration: 'none'
    },
  },
  itemContainer: {
    display: "flex",
    flexDirection: 'column'
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
  console.log(filterData)
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
        <Grid item xs={12} className={classes.filter}>
          {filterData.map((data) => (
            <Button
              size="small"
              rounded
              className={classes.button}>
              {data.topic}
            </Button>
          ))}
        </Grid>

        <Grid item xs={12} className={classes.filter}>
          <Link variant="caption" href="#" className={classes.caption}>
            Sub-topic
            </Link>
        </Grid>
      </Grid>
    </div>
  );
}
export default Filter;
