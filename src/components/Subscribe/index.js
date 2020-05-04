import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, IconButton, Typography } from "@material-ui/core";
import email from "assets/email.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#170f49",
    color: 'white',
  },
  subscribeGrid: {
    padding: '3rem 0rem'
  },
  subtitle: {
    paddingBottom: "2rem",
  },
  title: {
    color: theme.palette.text.secondary,
    paddingBottom: "2rem",
  },
  form: {},
  input: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.caption.fontSize,
    lineHeight: theme.typography.caption.lineHeight,
    borderBottom: "1px solid white",
    width: '80%'
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
  const classes = useStyles()
  return (
    <Grid container direction="row" justify="center" className={classes.root} spacing={5}>
      <Grid item xs={12} md={6}>One</Grid>

      <Grid item s={12} md={6} className={classes.subscribeGrid}>
        <Typography variant="h2" className={classes.title}>
          Subscribe
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.subtitle}
        >
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
    </Grid>

  )
}

export default Subscribe
