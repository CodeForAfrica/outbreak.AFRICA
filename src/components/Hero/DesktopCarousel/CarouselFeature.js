/* eslint-disable @next/next/no-img-element */
import { ButtonBase, Grid, Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import NextComposed from "@/outbreakafrica/components/Link/NextComposed";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {},
  actionArea: {},
  brief: {
    color: "#fff",
    marginBottom: "2rem",
  },
  cardLink: {
    marginTop: "1rem",
  },
  cardSize: {
    [breakpoints.up("md")]: {
      width: (props) =>
        typography.pxToRem(
          // `8` is for margin/padding between items
          (widths.values.md * props.width) / widths.values.xl + 8
        ),
    },
    [breakpoints.up("lg")]: {
      width: (props) =>
        typography.pxToRem(
          (widths.values.lg * props.width) / widths.values.xl + 8
        ),
    },
    [breakpoints.up("xl")]: {
      width: (props) => typography.pxToRem(props.width + 8),
    },
  },
  content: {},
  contents: {
    paddingRight: typography.pxToRem(8),
  },
  media: {
    objectFit: "cover",
    width: "100%",
    [breakpoints.up("md")]: {
      maxHeight: (props) =>
        typography.pxToRem(
          (widths.values.md * props.height) / widths.values.xl
        ),
    },
    [breakpoints.up("lg")]: {
      maxHeight: (props) =>
        typography.pxToRem(
          (widths.values.lg * props.height) / widths.values.xl
        ),
    },
    [breakpoints.up("xl")]: {
      maxHeight: (props) => typography.pxToRem(props.height),
    },
  },
  title: {
    fontWeight: "bold",
    marginTop: "1rem",
  },
}));

function CarouselCard({ item, linkTitle, ...props }) {
  const classes = useStyles(props);

  if (!item) {
    return null;
  }
  const { title, image, link_url: linkUrl } = item;
  const link = linkUrl && new URL(linkUrl).pathname;
  const actionAreaProps =
    (link && { component: NextComposed, href: link }) || undefined;
  return (
    <div className={clsx(classes.cardSize, classes.root)}>
      <ButtonBase
        {...actionAreaProps}
        className={clsx(classes.cardSize, classes.actionArea)}
      >
        <Grid container className={clsx(classes.contents)}>
          <Grid item xs={12} className={classes.content}>
            <img src={image} className={classes.media} alt={title} />
          </Grid>
          {title && (
            <Grid item xs={12} className={classes.content}>
              <Typography variant="subtitle2" className={classes.title}>
                {title}
              </Typography>
            </Grid>
          )}
        </Grid>
      </ButtonBase>
    </div>
  );
}

CarouselCard.propTypes = {
  height: PropTypes.number.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    link_url: PropTypes.string,
  }),
  linkTitle: PropTypes.string,
  width: PropTypes.number.isRequired,
};

CarouselCard.defaultProps = {
  item: undefined,
  linkTitle: "Learn More",
};

export default CarouselCard;
