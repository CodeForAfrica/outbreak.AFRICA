import React from "react";

import classNames from "classnames";

import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Link from "components/Link";

import Logo from "components/Navigation/Logo";
import Search from "./Search";
// import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0rem 6rem",
    [theme.breakpoints.up("md")]: {
      // margin: '2rem'
    },
  },
  button: {
    // marginRight: '4rem',
    width: "auto",
  },
  buttonLanguage: {
    color: "#9D9C9C",
    "&.active": {
      color: "#D6D6D6",
    },
    marginLeft: "2rem",
  },
  buttonLanguageLast: {
    marginRight: "-5.5rem",
  },
  grow: {
    flexGrow: 1,
  },
}));

function DesktopNavigation() {
  const classes = useStyles();
  return (
    <Grid container justify="flex-start" alignItems="center">
      <Grid item md={3}>
        <Logo />
      </Grid>
      {/* <div className={classes.grow} /> */}
      <Grid item md={5} container justify="flex-end">
        <Grid item>
          <Button size="large" className={classes.button}>
            DATA
          </Button>
        </Grid>
        <Grid item>
          <Button size="large" className={classes.button}>
            INSIGHT
          </Button>
        </Grid>
        <Grid item>
          <Button size="large" className={classes.button}>
            RESEARCH
          </Button>
        </Grid>
      </Grid>
      <Grid item md={3}>
        <Search size="large" style={{ fontSize: 20 }} />
      </Grid>
      <Grid item md={1} container justify="flex-start">
        <Link
          href="/#"
          underline="none"
          variant="overline"
          className={classNames(
            classes.button,
            classes.buttonLanguage,
            "active"
          )}
        >
          En
        </Link>
        <Link
          href="/#"
          underline="none"
          variant="overline"
          className={classNames(classes.button, classes.buttonLanguage)}
        >
          Fr
        </Link>
        <Link
          href="/#"
          underline="none"
          variant="overline"
          className={classNames(
            classes.button,
            classes.buttonLanguage,
            classes.buttonLanguageLast
          )}
        >
          عربى
        </Link>
      </Grid>
    </Grid>
  );
}

export default DesktopNavigation;
