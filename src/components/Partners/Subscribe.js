import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import emailFocus from "@/outbreakafrica/assets/electric-blue-email.svg";
import email from "@/outbreakafrica/assets/email.svg";
import Form from "@/outbreakafrica/components/Form";
import config from "@/outbreakafrica/config";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
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
    },
  },
  title: {
    color: theme.palette.text.secondary,
    paddingBottom: "2rem",
  },
  form: {
    "& #mc_embed_signup": {
      background: "inherit",
      color: "inherit",
    },
    "& #mc_embed_signup form": {
      padding: 0,
    },
    "& #mc_embed_signup label": {
      display: "none",
    },
    "& #mc_embed_signup input.email": {
      background: "none",
      border: "none",
      borderBottom: "1px solid currentColor",
      color: "currentColor",
      margin: "1rem 0",
      width: "100%",
    },
    "& #mc_embed_signup .button": {
      backgroundImage: `url(${email.src})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "40px 40px",
      height: 55,
      paddingLeft: theme.typography.pxToRem(50),
      "&:hover": {
        backgroundImage: `url(${emailFocus.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "40px 40px",
      },
      "&:focus": {
        backgroundImage: `url(${emailFocus.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "40px 40px",
      },
    },
  },
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

function Subscribe({ title, description, ...props }) {
  const classes = useStyles(props);

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

      <Form selector="#mc_embed_signup" classes={{ root: classes.form }}>
        {config.settings.subscribe.embedCode}
      </Form>
    </Grid>
  );
}

Subscribe.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Subscribe.defaultProps = {
  title: "Subscribe",
  description: "Stay updated with the latest News, Research and Analysis",
};

export default Subscribe;
