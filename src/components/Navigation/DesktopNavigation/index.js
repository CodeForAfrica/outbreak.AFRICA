import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Link from "components/Link";

import LinkButton from "components/Link/Button";
import Logo from "components/Navigation/Logo";

import DataMenuList from "./DataMenuList";
import MenuButton from "./MenuButton";
import Search from "./Search";

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

function DesktopNavigation({ country, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container justify="flex-start" alignItems="center">
      <Grid item md={3}>
        <Logo />
      </Grid>
      <div className={classes.grow} />
      <Grid item md={5} container justify="flex-end">
        <Grid item>
          <MenuButton
            color="secondary"
            size="large"
            title="DATA"
            variant="outlined"
          >
            <DataMenuList country={country} dense />
          </MenuButton>
        </Grid>
        <Grid item>
          <LinkButton href="/research" size="large" className={classes.button}>
            RESEARCH
          </LinkButton>
        </Grid>
        <Grid item>
          <Button size="large" className={classes.button}>
            INSIGHT
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

DesktopNavigation.propTypes = {
  country: PropTypes.shape({}).isRequired,
};

export default DesktopNavigation;
