import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cbdbfb",
    width: "100%",
    paddingLeft: '1.25rem',
    paddingRight: '3.25rem',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    [theme.breakpoints.up("md")]: {
      padding: "12% 23%",
    },
  },
  link: {
    textTransform: 'uppercase',
    borderBottom: '2px solid',
    borderRadius: 0,
    padding: 0,
  },
  title: {
    paddingBottom: "2.5rem",
  },
  brief: {
    paddingBottom: "1.5rem",
  },
}));

function JoinUs() {
  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
        <Typography variant="h1" className={classes.title}>
          Join us
        </Typography>
        <Typography variant="subtitle1" className={classes.brief}>
          Be part of the initiative
        </Typography>
        <Button variant="button" color="secondary" className={classes.link}>
          Learn More
        </Button>
    </Grid>
  );
}

export default JoinUs;
