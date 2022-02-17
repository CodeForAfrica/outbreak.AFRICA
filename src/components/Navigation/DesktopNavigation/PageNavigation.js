import { Section } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import LinkButton from "@/outbreakafrica/components/Link/Button";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    boxShadow: "0px 5px 30px #00000029",
    width: "100%",
  },
  section: {},
  button: {
    marginRight: "0.5rem",
    width: "auto",
    color: "#9D9C9C",
    [breakpoints.up("lg")]: {
      marginRight: "2rem",
    },
    [breakpoints.up("xl")]: {
      marginRight: "4rem",
    },
  },
  buttonCurrent: {
    color: palette.secondary.main,
  },
  navigation: {
    height: typography.pxToRem(50),
    [breakpoints.up("xl")]: {
      height: typography.pxToRem(70),
    },
  },
}));

function PageNavigation({
  navigation,
  pathname,
  asPath: asPathProp,
  ...props
}) {
  const classes = useStyles(props);
  // Remove query from asPath (if any)
  const asPath = asPathProp?.split("?")[0];
  const asPathParts = asPath?.split("/");
  // Limit navigationUrl to subnav level only i.e. ignore article slug
  const navigationUrl =
    asPathParts?.length > 2 && asPathParts.slice(0, 3).join("/");

  if (!navigation?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={classes.navigation}
        >
          {navigation.map((link) => (
            <Grid item key={link.url}>
              <LinkButton
                href={pathname || link.url}
                as={pathname ? link.url : undefined}
                size="small"
                className={clsx(classes.button, {
                  [classes.buttonCurrent]: link.url.startsWith(navigationUrl),
                })}
              >
                {link.title}
              </LinkButton>
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
}

PageNavigation.propTypes = {
  asPath: PropTypes.string,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  pathname: PropTypes.string,
};

PageNavigation.defaultProps = {
  asPath: undefined,
  navigation: undefined,
  pathname: undefined,
};

export default PageNavigation;
