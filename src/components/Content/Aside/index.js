import React from "react";
import PropTypes from "prop-types";

import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TableOfContents from "components/TableOfContents";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {
    [breakpoints.up("md")]: {
      position: "absolute",
      right: "1rem",
      width: typography.pxToRem((widths.values.md * 481) / widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem((widths.values.lg * 481) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      right: typography.pxToRem(73),
      width: typography.pxToRem(481),
    },
  },
  children: {},
  contents: {},
  tableOfContents: {},
  tableOfContentsLink: {},
}));

function Aside({ children, contents, current, ...props }) {
  const classes = useStyles(props);

  if (!contents && !children) {
    return null;
  }
  return (
    <Grid container className={classes.root}>
      {contents && (
        <Grid item xs={12} className={classes.contents}>
          <TableOfContents
            {...props}
            contents={contents}
            value={current}
            classes={{
              root: classes.tableOfContents,
              link: classes.tableOfContentsLink,
            }}
          />
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
  children: PropTypes.node,
  contents: PropTypes.arrayOf(PropTypes.shape({})),
  current: PropTypes.string,
};

Aside.defaultProps = {
  children: undefined,
  contents: undefined,
  current: undefined,
};

export default Aside;
