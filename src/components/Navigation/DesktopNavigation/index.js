import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import classNames from "classnames";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkButton from "components/Link/Button";

import Link from "components/Link";

import Logo from "components/Navigation/Logo";
import Search from "components/Navigation/Search";

import DataMenuList from "./DataMenuList";
import MenuButton from "./MenuButton";
import config from "../../../config";

import SecondaryMenus from "components/Navigation/DesktopNavigation/SecondaryMenus";
import SecondaryNavBar from "components/Navigation/DesktopNavigation/SecondaryNavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0rem 6rem",
  },
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: "0.5rem",
    "&:hover": {
      backgroundColor: "white",
    },
    width: "auto",
    [theme.breakpoints.up("lg")]: {
      marginRight: "2rem",
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: "4rem",
    },
  },
  buttonLanguage: {
    color: "#9D9C9C",
    "&.active": {
      color: "#D6D6D6",
    },
    marginLeft: "0.75rem",
    width: "auto",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "1.25rem",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "2rem",
    },
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
  const { insightsMenu, researchMenu } = config;
  const router = useRouter();

  const getInsightPaths = () => {
    return (
      router.asPath === "/insights" ||
      router.asPath === `/insights/analysis` ||
      router.asPath === `/insights/featured-stories` ||
      router.asPath === `/insights/mythbusters` ||
      router.asPath === `/insights/resources`
    );
  };

  const getResearchPaths = () => {
    return (
      router.asPath === "/research" ||
      router.asPath === `/research/featured-datasets` ||
      router.asPath === `/research/featured-documents` ||
      router.asPath === `/research/featured-experts`
    );
  };

  return (
    <>
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
              className={classes.button}
            >
              <DataMenuList country={country} dense />
            </MenuButton>
          </Grid>
          <Grid item>
            <LinkButton
              href="/research"
              size="large"
              className={classes.button}
            >
              RESEARCH
            </LinkButton>
          </Grid>
          <Grid item>
            <LinkButton
              href="/insights"
              size="large"
              className={classes.button}
            >
              INSIGHTS
            </LinkButton>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Search size="large" />
        </Grid>
        <Grid item md={1} container justify="flex-start">
          <Link
            href="/#"
            underline="none"
            variant="overline"
            className={classNames(classes.buttonLanguage, "active")}
          >
            En
          </Link>
          <Link
            href="/#"
            underline="none"
            variant="overline"
            className={classNames(classes.buttonLanguage)}
          >
            Fr
          </Link>
          <Link
            href="/#"
            underline="none"
            variant="overline"
            className={classNames(
              classes.buttonLanguage,
              classes.buttonLanguageLast
            )}
          >
            عربى
          </Link>
        </Grid>
      </Grid>

      {getInsightPaths() ? (
        <SecondaryNavBar>
          <SecondaryMenus menus={insightsMenu} />
        </SecondaryNavBar>
      ) : getResearchPaths() ? (
        <SecondaryNavBar>
          <SecondaryMenus menus={researchMenu} />
        </SecondaryNavBar>
      ) : null}
    </>
  );
}

DesktopNavigation.propTypes = {
  country: PropTypes.shape({}).isRequired,
};

export default DesktopNavigation;
