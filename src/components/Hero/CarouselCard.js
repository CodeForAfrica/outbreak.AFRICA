import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints, widths }) => ({
  root: {
    backgroundColor: "#fafafa",
    border: "1px solid #eeeeee",
    opacity: 0.9,
    "&:hover": {
      opacity: 1,
      backgroundColor: "#fff",
    },
  },
  contentRoot: {
    position: "absolute",
    top: "50%",
    left: "35px",
    width: "90%",
    [breakpoints.up("md")]: {
      top: "62.5%",
      left: "15px",
    },
  },
  media: {},
  cardLink: {},
  bodyTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: "1rem",
  },
  bodyText: {
    color: "#fff",
    marginBottom: "2rem",
  },
  cardSize: {
    height: (props) => props.height,
    width: (props) => props.width,
    [breakpoints.up("md")]: {
      height: (props) => (widths.values.md * props.height) / widths.values.xl,
      width: (props) => (widths.values.md * props.width) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      height: (props) => (widths.values.lg * props.height) / widths.values.xl,
      width: (props) => (widths.values.lg * props.width) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      height: (props) => props.height,
      width: (props) => props.width,
    },
  },
}));

function CarouselCard({ item, linkTitle, ...props }) {
  const classes = useStyles(props);

  if (!item) {
    return null;
  }
  const { title, brief, image, link_url: link } = item;
  return (
    <Card className={classNames(classes.cardSize, classes.root)}>
      <CardActionArea style={{ height: "100%" }}>
        <CardMedia
          className={classNames(classes.cardSize, classes.media)}
          image={image}
          title="Item"
        />
        <Grid
          container
          item
          direction="column"
          className={classes.contentRoot}
          alignItems="flex-start"
        >
          {title && (
            <Typography variant="subtitle2" className={classes.bodyTitle}>
              {title}
            </Typography>
          )}
          {brief && (
            <Typography variant="caption" className={classes.bodyText}>
              {brief}
            </Typography>
          )}
          {link && (
            <Button variant="outlined" href={link} className={classes.cardLink}>
              {linkTitle}
            </Button>
          )}
        </Grid>
      </CardActionArea>
    </Card>
  );
}

CarouselCard.propTypes = {
  height: PropTypes.number.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string,
    brief: PropTypes.string,
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
