import React from "react";
import PropTypes from "prop-types";

import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Link from "components/Link";
import Tabs from "components/Tabs";

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, widths }) => ({
    root: {
      backgroundColor: "#EEEEEE",
      width: "100%",
      [breakpoints.up("md")]: {
        border: "none",
        paddingBottom: typography.pxToRem(75),
        paddingLeft: typography.pxToRem(
          (67 * widths.values.md) / widths.values.xl
        ),
        paddingRight: typography.pxToRem(
          (53 * widths.values.md) / widths.values.xl
        ),
        paddingTop: typography.pxToRem(40),
      },
      [breakpoints.up("lg")]: {
        paddingLeft: typography.pxToRem(
          (67 * widths.values.lg) / widths.values.xl
        ),
        paddingRight: typography.pxToRem(
          (53 * widths.values.lg) / widths.values.xl
        ),
      },
      [breakpoints.up("xl")]: {
        paddingLeft: typography.pxToRem(67),
        paddingRight: typography.pxToRem(53),
      },
    },
    link: {
      lineHeight: 60 / 24,
      "&:hover": {
        color: palette.primary.main,
      },
    },
  })
);

function TableOfContents({ contents, handleChange, value, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  if (!isDesktop) {
    return (
      <div className={classes.root}>
        <Tabs handleChange={handleChange} tabs={contents} value={value} />
      </div>
    );
  }
  return (
    <Grid container direction="column" className={classes.root}>
      {contents.map((content) => (
        <Grid item key={content.as || content.href}>
          <Link
            color={content.slug === value ? "primary" : "secondary"}
            as={content.as}
            href={content.href}
            onClick={handleChange}
            variant="subtitle2"
            underline="none"
            className={classes.link}
          >
            {content.name}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

TableOfContents.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      as: PropTypes.string,
    })
  ).isRequired,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

TableOfContents.defaultProps = {
  handleChange: undefined,
  value: undefined,
};

export default TableOfContents;
