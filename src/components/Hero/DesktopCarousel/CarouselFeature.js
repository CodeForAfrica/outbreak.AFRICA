import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { ButtonBase, Grid, Typography, makeStyles } from "@material-ui/core";

import NextComposed from "components/Link/NextComposed";

const useStyles = makeStyles(({ breakpoints, widths }) => ({
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
      width: (props) => (widths.values.md * props.width) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      width: (props) => (widths.values.lg * props.width) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      width: (props) => props.width,
    },
  },
  content: {
    zIndex: 1,
  },
  contents: {
    paddingRight: 8,
  },
  media: {
    borderRight: "2px solid #fff",
    objectFit: "cover",
    [breakpoints.up("md")]: {
      height: (props) => (widths.values.md * props.height) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      height: (props) => (widths.values.lg * props.height) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      height: (props) => props.height,
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
    <div className={classNames(classes.cardSize, classes.root)}>
      <ButtonBase
        {...actionAreaProps}
        className={classNames(classes.cardSize, classes.actionArea)}
      >
        <Grid container className={classNames(classes.contents)}>
          <Grid item xs={12}>
            <img
              src={image}
              className={classNames(classes.cardSize, classes.media)}
              alt={title}
            />
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
