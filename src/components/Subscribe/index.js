import React from "react";
import PropTypes from "prop-types";

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
    padding: "8rem 0rem",
  },
  subtitle: {
    padding: "2rem 0rem",
  },
  title: {
    color: theme.palette.text.secondary,
    padding: "2rem 0rem",
  },
  form: {},
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
    width: "80%",
  },
  button: {
    padding: 0,
    paddingTop: "1rem",
  },
}));

function Subscribe({ subscribe, ...props}) {
  const classes = useStyles(props);
  const { title, description } = subscribe;
  
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container direction="row" justify="center" spacing={5}>
          <Grid item xs={12} md={6}>
            <img
              src={source}
              alt="Subscribe"
              className={classes.subscribeImage}
            />
          </Grid>

          <Grid item xs={8} md={6} className={classes.subscribeGrid}>
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
        </Grid>
      </Section>
    </div>
  );
}

Subscribe.propTypes = {
  subscribe: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
  })
};

Subscribe.defaultProps = {
  subscribe: {
    title: "Subscribe",
    description: "Stay updated with the latest News, Research and Analysis",
  }
};
export default Subscribe;
