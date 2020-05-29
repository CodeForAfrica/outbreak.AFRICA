import React from "react";
import PropTypes from "prop-types";

import { useRouter } from "next/router";

import classNames from "classnames";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "@commons-ui/core";

import Link from "components/Link";
import Logo from "components/Navigation/Logo";
import Search from "components/Search";

import DataMenuList from "./DataMenuList";
import MenuButton from "./MenuButton";
import NavigationButton from "./NavigationButton";
import PageNavigation from "./PageNavigation";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  section: {},
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: "0.5rem",
    "&:hover": {
      backgroundColor: "white",
    },
    width: "auto",
    [breakpoints.up("lg")]: {
      marginRight: "2rem",
    },
    [breakpoints.up("xl")]: {
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
    [breakpoints.up("lg")]: {
      marginLeft: "1.25rem",
    },
    [breakpoints.up("xl")]: {
      marginLeft: "2rem",
    },
  },
  buttonLanguageLast: {
    marginRight: "-5.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  navigation: {
    height: typography.pxToRem(110),
    [breakpoints.up("xl")]: {
      height: typography.pxToRem(150),
    },
  },
  pageNavigation: {
    background: "#fff",
  },
}));

function DesktopNavigation({ country, navigation, ...props }) {
  const classes = useStyles(props);
  const router = useRouter();
  const [dataNavigation, ...otherNavigations] = navigation || [];
  const { asPath } = router;
  const currentPageUrl = `/${asPath.split("/")[1]}`;
  const pageNavigation = otherNavigations.find(
    (otherNavigation) => otherNavigation.url === currentPageUrl
  );

  if (!dataNavigation) {
    return null;
  }
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Section classes={{ root: classes.section }}>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            className={classes.navigation}
          >
            <Grid item md={3}>
              <Logo />
            </Grid>
            <div className={classes.grow} />
            <Grid item md={5} container justify="flex-end">
              <Grid item>
                <MenuButton
                  color="secondary"
                  size="large"
                  title={dataNavigation.title}
                  variant="outlined"
                  className={classes.button}
                >
                  <DataMenuList country={country} dense />
                </MenuButton>
              </Grid>
              {otherNavigations.map((otherNavigation) => (
                <Grid item>
                  <NavigationButton
                    color="secondary"
                    title={otherNavigation.title}
                    size="large"
                    active={otherNavigation.url === currentPageUrl}
                    className={classes.button}
                  >
                    <PageNavigation
                      pathname={otherNavigation.url}
                      navigation={otherNavigation.subnav}
                      classes={{
                        root: classes.pageNavigation,
                        section: classes.section,
                      }}
                    />
                  </NavigationButton>
                </Grid>
              ))}
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
        </Section>
      </Grid>
      {pageNavigation && pageNavigation.subnav && (
        <Grid item xs={12}>
          <PageNavigation
            pathname={asPath}
            navigation={pageNavigation.subnav}
            classes={{ section: classes.section }}
          />
        </Grid>
      )}
    </Grid>
  );
}

DesktopNavigation.propTypes = {
  country: PropTypes.shape({}).isRequired,
  navigation: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default DesktopNavigation;
