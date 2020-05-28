import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, IconButton, Typography } from "@material-ui/core";

import { Section } from "@commons-ui/core";

import email from "assets/email.svg";
import electricBlueEmail from "assets/electric-blue-email.svg";
import source from "assets/subscribe.png";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    backgroundColor: "#170f49",
    color: "white",
  },
  section: {},
  subscribeGrid: {
    padding: "3rem 0rem 5rem",
  },
  subtitle: {
    paddingBottom: "2rem",
  },
  title: {
    color: palette.text.secondary,
    padding: "2rem 0rem",
  },
  form: {},
  input: {
    color: palette.text.secondary,
    fontSize: typography.caption.fontSize,
    lineHeight: typography.caption.lineHeight,
    borderBottom: "1px solid white",
    width: "100%",
    [breakpoints.up("md")]: {
      width: "80%",
    },
  },
  img: {
    height: "2.5rem",
  },
  subscribeImage: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "initial",
      height: "445px",
      position: "absolute",
      top: 0,
      left: "-110px",
    },
  },
  subscribeImageDiv: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "initial",
      position: "relative",
      overflow: "visible",
    },
  },
  button: {
    padding: 0,
    paddingTop: "1rem",
  },
}));

function Subscribe({ subscribe, ...props }) {
  const classes = useStyles(props);
  const [iconSrc, setIconSrc] = useState(email);

  const { title, description } = subscribe;

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container direction="row">
          <Grid item md={5} className={classes.subscribeImageDiv}>
            <img
              src={source}
              alt="Subscribe"
              className={classes.subscribeImage}
            />
          </Grid>
          <Grid item xs={12} md={7} className={classes.subscribeGrid}>
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

              <IconButton 
                className={classes.button} 
                onFocus={() => setIconSrc(electricBlueEmail)}
                onMouseOver={() => setIconSrc(electricBlueEmail)}
                onBlur={() => setIconSrc(email)}
                onMouseOut={() => setIconSrc(email)}>
                <img
                  src={iconSrc}
                  alt="Arrow icon"
                  className={classes.img}
                />
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
  }),
};

Subscribe.defaultProps = {
  subscribe: {
    title: "Subscribe",
    description: "Stay updated with the latest News, Research and Analysis",
  },
};
export default Subscribe;
