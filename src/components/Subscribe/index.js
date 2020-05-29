import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, IconButton, Typography } from "@material-ui/core";

import { Section } from "@commons-ui/core";

import email from "assets/email.svg";
import emailFocus from "assets/electric-blue-email.svg";
import source from "assets/subscribe.png";

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, widths }) => ({
    root: {
      backgroundColor: "#170f49",
      color: "white",
    },
    section: {},
    button: {
      padding: 0,
      paddingTop: "1rem",
    },
    form: {},
    img: {
      height: "2.5rem",
    },
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
    subscribeGrid: {
      padding: "5.625rem 0rem",
      [breakpoints.up("md")]: {
        padding: "2rem",
      },
      [breakpoints.up("lg")]: {
        padding: "3rem 0rem 4rem",
      },
      [breakpoints.up("xl")]: {
        padding: "4rem 0rem 5rem",
      },
    },
    subscribeImage: {
      display: "none",
      [breakpoints.up("md")]: {
        display: "initial",
        margin: "2rem",
        height: (widths.values.md * 448) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        height: (widths.values.lg * 448) / widths.values.xl,
        left: "-110px",
        position: "absolute",
        top: 0,
      },
      [breakpoints.up("xl")]: {
        height: "448px",
        margin: 0,
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
    subtitle: {
      paddingBottom: "2rem",
    },
    title: {
      color: palette.text.secondary,
      paddingBottom: "2rem",
    },
  })
);

function Subscribe({ subscribe, ...props }) {
  const classes = useStyles(props);
  const { title, description } = subscribe;
  const handleEvent = (e) => {
    if (e.type === "mouseout" || e.type === "blur") {
      e.currentTarget.src = email;
    }
    if (e.type === "mouseover" || e.type === "focus") {
      e.currentTarget.src = emailFocus;
    }
  };

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
              <IconButton className={classes.button}>
                <img
                  src={email}
                  alt="Arrow icon"
                  className={classes.img}
                  onMouseOver={handleEvent}
                  onFocus={handleEvent}
                  onMouseOut={handleEvent}
                  onBlur={handleEvent}
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
