import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Section } from "@commons-ui/core";

import JoinUs from "components/JoinUs";
import Subscribe from "components/Subscribe";

import Aside from "./Aside";
import Main from "./Main";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: "relative",
  },
  section: {},
  aside: {},
  asideContainer: {
    [breakpoints.up("md")]: {
      position: "relative",
      overflow: "visible",
    },
  },
  // Since we're absolute position aside to get the design effect, we don't
  // know how tall it will end up being and hence this trick of adding another
  // aside with the same size but hidden from view without being absolute
  // positioned & hence forcing parent to take the height of aside
  asideHidden: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "unset",
      position: "initial",
      right: "unset",
      visibility: "hidden",
      zIndex: -1,
    },
  },
  asideMobile: {
    backgroundColor: "#EEEEEE",
    border: "1px solid #707070",
    borderLeft: "none",
    borderRight: "none",
    width: "100%",
  },
  joinUs: {},
  subscribe: {},
  support: {},
  main: {},
}));

function Content({
  aside,
  children,
  classes: classesProp,
  contents,
  current,
  main,
  variant,
  ...props
}) {
  const classes = useStyles({ ...props, classes: classesProp });
  const SupportComponent = variant === "join" ? JoinUs : Subscribe;

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <div className={classes.asideMobile}>
          <Section classes={{ root: classes.section }}>
            <Aside
              contents={contents}
              current={current}
              classes={{ root: classes.aside }}
            >
              <SupportComponent
                {...props}
                variant="compact"
                classes={{
                  root: classNames(
                    classes.support,
                    { [classes.subscribe]: variant === "join" },
                    { [classes.joinUs]: variant === "join" }
                  ),
                  section: classes.section,
                }}
              />
            </Aside>
          </Section>
        </div>
      </Hidden>
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={aside}
            implementation="css"
            smDown
            component={Hidden}
            className={classes.asideContainer}
          >
            <Aside
              contents={contents}
              current={current}
              classes={{ root: classes.aside }}
            >
              <SupportComponent
                {...props}
                variant="compact"
                classes={{
                  root: classNames(
                    classes.support,
                    { [classes.subscribe]: variant === "join" },
                    { [classes.joinUs]: variant === "join" }
                  ),
                  section: classes.section,
                }}
              />
            </Aside>
            <Aside
              contents={contents}
              current={current}
              classes={{
                root: classNames(classes.aside, classes.asideHidden),
              }}
            >
              <SupportComponent
                {...props}
                variant="compact"
                classes={{
                  root: classNames(
                    classes.support,
                    { [classes.subscribe]: variant === "join" },
                    { [classes.joinUs]: variant === "join" }
                  ),
                  section: classes.section,
                }}
              />
            </Aside>
          </Grid>
          {(contents || children) && (
            <Grid item xs={12} md={main}>
              {contents &&
                contents.map((content) => (
                  <Main
                    key={content.slug}
                    content={content}
                    classes={{ root: classes.main }}
                  />
                ))}
              {children}
            </Grid>
          )}
        </Grid>
      </Section>
      <Hidden mdUp>
        <SupportComponent
          {...props}
          classes={{
            root: classNames(
              classes.support,
              { [classes.subscribe]: variant === "join" },
              { [classes.joinUs]: variant === "join" }
            ),
            section: classes.section,
          }}
        />
      </Hidden>
    </div>
  );
}

Content.propTypes = {
  aside: PropTypes.number,
  current: PropTypes.string,
  main: PropTypes.number,
  variant: PropTypes.oneOf(["subscribe", "join"]),
};

Content.defaultProps = {
  aside: 3,
  current: undefined,
  main: 6,
  variant: "subscribe",
};
export default Content;
