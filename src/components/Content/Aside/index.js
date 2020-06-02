import React from "react";
import PropTypes from "prop-types";

import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TableOfContents from "components/TableOfContents";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {
    [breakpoints.up("md")]: {
      position: "absolute",
      right: "3.5rem",
      width: typography.pxToRem((widths.values.md * 481) / widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      right: "1rem",
      width: typography.pxToRem((widths.values.lg * 481) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      right: typography.pxToRem(73),
      width: typography.pxToRem(481),
    },
  },
  children: {},
  contents: {},
}));

function Aside({ children, contents, ...props }) {
  const classes = useStyles(props);

  if (!contents && !children) {
    return null;
  }
  return (
    <Grid container className={classes.root}>
      {contents && (
        <Grid item xs={12} className={classes.contents}>
          <TableOfContents contents={contents} {...props} />
        </Grid>
      )}
      {children && (
        <Grid
          item
          xs={12}
          implementation="css"
          smDown
          component={Hidden}
          className={classes.children}
        >
          {children}
        </Grid>
      )}
    </Grid>
  );
}

Aside.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.string.isRequired,
};

export default Aside;
