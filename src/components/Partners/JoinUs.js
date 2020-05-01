import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  link: {
    borderBottom: "2px solid",
    borderRadius: 0,
    padding: 0,
  },
  title: {
    paddingBottom: "1.25rem",
  },
  brief: {
    paddingBottom: "1.5rem",
  },
}));

function JoinUs() {
  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Join us
      </Typography>
      <Typography variant="subtitle1" className={classes.brief}>
        Be part of the initiative
      </Typography>
      <Button variant="outline" color="secondary" className={classes.link}>
        Learn More
      </Button>
    </Grid>
  );
}

export default JoinUs;
