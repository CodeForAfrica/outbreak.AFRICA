import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, IconButton, Typography } from "@material-ui/core";

import { Section } from "@commons-ui/core";

import email from "assets/email.svg";
import source from "assets/subscribe-image.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#170f49",
    color: "white",
  },
  section: {},
  subscribeGrid: {
    padding: "2rem 0rem",
  },
  title: {
    color: theme.palette.text.secondary,
    padding: "0.5rem 0rem",
  },
  form: {
    width: '395px'
  },
  input: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.caption.fontSize,
    lineHeight: theme.typography.caption.lineHeight,
    borderBottom: "1px solid white",
    width: "80%",
  },
  img: {
    height: "2.5rem",
  },
  subscribeImage: {
    height: "auto",
    maxWidth: '100%',
    width: "448px",
  },
  button: {
    padding: 0,
    paddingTop: "1rem",
  },
}));

function Subscribe() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container direction="row" justify="center">
          <Grid item xs={12} md={5}>
            <img
              src={source}
              alt="Subscribe"
              className={classes.subscribeImage}
            />
          </Grid>

          <Grid item xs={8} md={7} className={classes.subscribeGrid}>
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
      </Section>
    </div>
  );
}

export default Subscribe;
