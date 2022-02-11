import { RichTypography } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    marginTop: typography.pxToRem(40),
    width: "100%",
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(100),
    },
  },
  grow: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "flex",
      flexGrow: 1,
      height: 2,
      backgroundColor: palette.secondary.main,
    },
  },
  icon: {
    height: "auto",
    marginRight: "1rem",
    width: typography.pxToRem(50),
    [breakpoints.up("xl")]: {
      width: typography.pxToRem(60),
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    margin: "1.5rem 2rem 1.5rem 0",
    [breakpoints.up("xl")]: {
      margin: "1.5rem 3rem 1.5rem 0",
    },
  },
}));

function SectionSubtitle({ children, icon, name, ...props }) {
  const classes = useStyles(props);

  if (!children && !name) {
    return null;
  }
  return (
    <Grid container alignItems="center" className={classes.root}>
      <RichTypography variant="h4" className={classes.title}>
        {icon && (
          <img
            src={icon.src}
            alt={icon.alt || name || children}
            className={classes.icon}
          />
        )}
        {name || children}
      </RichTypography>
      <div className={classes.grow} />
    </Grid>
  );
}

SectionSubtitle.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
  name: PropTypes.string,
};
SectionSubtitle.defaultProps = {
  children: undefined,
  icon: undefined,
  name: undefined,
};

export default SectionSubtitle;
