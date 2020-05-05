import React from "react";
import PropTypes from "prop-types";

import { Grid, IconButton, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import email from "assets/email.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      paddingTop: "10%",
    },
  },
  subtitle: {
    width: "90%",
    paddingBottom: "2rem",
    [theme.breakpoints.up("md")]: {
      width: "80%",
      paddingBottom: "5rem",
    },
  },
  title: {
    color: theme.palette.text.secondary,
    paddingBottom: "2rem",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "5rem",
    },
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

function Subscribe({ title, description }) {
  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        className={classes.subtitle}
      >
        {description}
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

Subscribe.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Subscribe.defaultProps = {
  title: 'Subscribe',
  description: 'Stay updated with the latest News, Research and Analysis'
}
export default Subscribe;
