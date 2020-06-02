import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { A } from "@commons-ui/core";

import websiteBlue from "assets/icon web.svg";

const useStyles = makeStyles(
  ({ breakpoints, typography, palette, widths }) => ({
    link: {
      display: "flex",
      paddingTop: "1rem",
    },
    icon: {
      objectFit: "contain",
      height: "1rem",
      width: "1rem",
      [breakpoints.up("md")]: {
        height: "1.375rem",
        width: "1.375rem",
      },
    },
    image: {
      width: "auto",
      height: 180,
      [breakpoints.up("md")]: {
        height: (widths.values.md * 460) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        height: (widths.values.lg * 460) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        height: 460,
      },
    },
    imageDiv: {
      width: "100%",
      height: 221,
      padding: "1rem 0.6875rem 1rem 0.8125rem",
      overflow: "hidden",
      position: "relative",
      "&:after": {
        backgroundColor: palette.primary.main,
        bottom: 0,
        content: '""',
        left: 0,
        mixBlendMode: "multiply",
        opacity: 0.3,
        position: "absolute",
        right: 0,
        top: 0,
      },
      [breakpoints.up("md")]: {
        height: (widths.values.md * 546) / widths.values.xl,
        padding: "1.5rem 1rem",
      },
      [breakpoints.up("lg")]: {
        height: (widths.values.lg * 546) / widths.values.xl,
        padding: "2rem 1.5rem",
      },
      [breakpoints.up("xl")]: {
        height: 546,
        padding: "2.6875rem 1.875rem 2.6875rem 2rem",
      },
    },
    contentDiv: {
      [breakpoints.up("md")]: {
        paddingTop: "1.375rem",
      },
    },
    documentDiv: {
      borderTop: "1px solid #D6D6D6",
      paddingTop: typography.pxToRem(16),
      paddingBottom: typography.pxToRem(16),
      [breakpoints.up("md")]: {
        border: 0,
        paddingTop: 0,
        paddingBottom: typography.pxToRem(50),
        paddingRight: typography.pxToRem(16),
        "&:last-of-type": {
          paddingRight: 0,
        },
      },
    },
    title: {
      fontWeight: "bold",
    },
  })
);

function DocumentItem({ description, title, imageUrl, documentUrl, ...props }) {
  const classes = useStyles(props);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      item
      container
      xs={12}
      md={3}
      direction={isDesktop ? "row" : "row-reverse"}
      className={classes.documentDiv}
    >
      {imageUrl && (
        <Grid item xs={6} md={12} className={classes.imageDiv}>
          <img src={imageUrl} alt="" className={classes.image} />
        </Grid>
      )}
      <Grid item xs={6} md={12} className={classes.contentDiv}>
        {title && (
          <Typography variant="subtitle2" className={classes.title}>
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="caption">{description}</Typography>
        )}
        {documentUrl && (
          <A href={documentUrl} color="textSecondary" className={classes.link}>
            <img src={websiteBlue} alt={title} className={classes.icon} />
          </A>
        )}
      </Grid>
    </Grid>
  );
}

DocumentItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  documentUrl: PropTypes.string.isRequired,
};

export default DocumentItem;
