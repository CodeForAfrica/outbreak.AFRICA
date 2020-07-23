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

import NextComposed from "components/Link/NextComposed";

const useStyles = makeStyles(({ breakpoints, widths }) => ({
  root: {
    border: "1px solid #eeeeee",
    backgroundColor: "#fafafa",
    height: "100%",
    minHeight: "21rem",
    opacity: 0.9,
    position: "relative",
    width: "100%",
    "&:after": {
      bottom: 0,
      content: '""',
      background:
        "transparent linear-gradient(180deg, #FFFFFF 0%, #000000 60%, #000000 100%) 0% 0% no-repeat padding-box",
      height: "50%",
      left: 0,
      mixBlendMode: "multiply",
      opacity: 0.5,
      position: "absolute",
      right: 0,
    },
    "&:hover": {
      opacity: 1,
      backgroundColor: "#fff",
    },
  },
  actionArea: {
    position: "relative",
  },
  brief: {
    color: "#fff",
    marginBottom: "2rem",
  },
  cardLink: {
    marginTop: "1rem",
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
  content: {
    zIndex: 1,
  },
  contents: {
    padding: "1rem",
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  media: {},
  title: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: "1rem",
  },
}));

function CarouselCard({ item, linkTitle, ...props }) {
  const classes = useStyles(props);

  if (!item) {
    return null;
  }
  const { title, brief, image, link_url: linkUrl } = item;
  const link = linkUrl && new URL(linkUrl).pathname;
  const actionAreaProps =
    (link && { component: NextComposed, href: link }) || undefined;
  return (
    <Card className={classNames(classes.cardSize, classes.root)}>
      <CardActionArea
        {...actionAreaProps}
        className={classNames(classes.cardSize, classes.actionArea)}
      >
        <CardMedia
          className={classNames(classes.cardSize, classes.media)}
          image={image}
          title={title}
        />
        <Grid
          container
          item
          direction="column"
          alignItems="flex-start"
          justify="flex-end"
          className={classes.contents}
        >
          {title && (
            <Grid item className={classes.content}>
              <Typography variant="subtitle2" className={classes.title}>
                {title}
              </Typography>
            </Grid>
          )}
          {brief && (
            <Grid item className={classes.content}>
              <Typography variant="caption" className={classes.brief}>
                {brief}
              </Typography>
            </Grid>
          )}
          {link && (
            <Grid item className={classes.content}>
              <Button
                variant="outlined"
                href={link}
                className={classes.cardLink}
              >
                {linkTitle}
              </Button>
            </Grid>
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
