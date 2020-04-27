import React from "react";
import classnames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";

import { RichTypography, Section } from "@commons-ui/core";

import illo from "assets/images/illo-03.png";
import illoMobile from "assets/images/illo-03-mobile.png";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#170F49",
  },
  section: {},
  description: {
    paddingTop: "12rem",
    paddingBottom: "12rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "3rem",
      paddingTop: "1rem",
    },
  },
  title: {
    color: "white",
  },
  linkContainer: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "3rem",
    },
  },
  link: {},
  subtitle: {
    "&.subtitle": {
      color: "white",
    },
    "& .highlight": {
      background:
        "url(\"data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='1px' height='1px' viewBox='0 0 1 1' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='1' height='1' fill='white' fill-opacity='0.5' /%3E%3C/svg%3E\") no-repeat 100% 100%",
      backgroundSize: "100% 50%",
    },
  },
  imgContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileImgContainer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      maxWidth: "100%",
    },
  },
}));

function MythBursting({ title, description, linkText, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.description}>
              <div>
                <img
                  src={illoMobile}
                  alt="Corona virus"
                  className={classes.mobileImgContainer}
                />
                <Typography variant="h2" className={classes.title}>
                  {title}
                </Typography>
                <RichTypography
                  variant="subtitle1"
                  className={classnames(classes.subtitle, "subtitle")}
                >
                  {description}
                </RichTypography>
              </div>
            </div>
            <div className={classes.linkContainer}>
              <Button
                variant="outlined"
                color="primary"
                href="/"
                className={classes.link}
              >
                {linkText}
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imgContainer}>
            <img src={illo} alt="Corona virus" />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

MythBursting.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default MythBursting;
