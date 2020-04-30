import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import email from "assets/email.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: '2rem',
    paddingBottom: '2rem',
    [theme.breakpoints.up("md")]: {
      paddingTop: "10%",
    },
  },
  subtitle: {
    width: '80%',
    paddingBottom: "5rem",
  },
  title: {
    color: theme.palette.text.secondary,
    paddingBottom: "5rem"
  },
  form: {},
  input: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.caption.fontSize,
    lineHeight: theme.typography.caption.lineHeight,
    borderBottom: "1px solid white",
  },
  img: {
    height: "2.5rem",
  },
  button: {
    padding: 0,
    paddingTop: "1rem",
  },
}));

function Subscribe() {
  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Subscribe
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        className={classes.subtitle}
      >
        {" "}
        Stay updated with the latest News, Research and Analysis
      </Typography>

      <form className={classes.form}>
        <TextField
          id="standard-basic"
          autoFocus={false}
          placeholder="Enter your email address"
          margin="normal"
          fullWidth
          InputProps={{ className: classes.input }}
        />

        <IconButton className={classes.button}>
          <img src={email} alt="Arrow icon" className={classes.img} />
        </IconButton>
      </form>
    </Grid>
  );
}

export default Subscribe;
