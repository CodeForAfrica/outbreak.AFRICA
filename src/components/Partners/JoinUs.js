import React from "react";
import { Button, Grid, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cbdbfb",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "24%",
    },
  },
  typoGrid: {
    padding: "5rem",
  },
  typo: {
    color: "white",
  },
  link: {},
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    padding: "1rem 0rem",
  },
  divider: {
    backgroundColor: "#170F49",
    height: "2px",
    width: "25%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  learnMore: {
    paddingTop: "1rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "0.5rem",
    },
  },
}));

function JoinUs() {
  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
      <div className={classes.typoGrid}>
        <Typography variant="h2" className={classes.title}>
          Join us
        </Typography>
        <Typography variant="subtitle1">Be part of the initiative</Typography>
        <div className={classes.learnMore}>
          <Button variant="outlined" color="secondary" className={classes.link}>
            LEARN MORE
          </Button>
        </div>
      </div>
    </Grid>
  );
}

export default JoinUs;
