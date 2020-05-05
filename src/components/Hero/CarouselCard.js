import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "21rem",
    height: "100%",
    backgroundColor: "#fafafa",
    border: "1px solid #eeeeee",
    opacity: 0.9,
    "&:hover": {
      opacity: 1,
      backgroundColor: "#fff",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "1.25rem",
      minHeight: "30rem",
    },
  },
  contentRoot: {
    position: "absolute",
    top: "50%",
    left: "35px",
    width: "90%",
    [theme.breakpoints.up("md")]: {
      top: "62.5%",
      left: "15px",
    },
  },
  media: {
    minHeight: "21rem",
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      minHeight: "30rem",
    },
  },
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
}));

function CarouselCard({ item, linkTitle }) {
  const classes = useStyles();

  if (!item) {
    return null;
  }

  const { title, brief, image, link_url: link } = item;

  return (
    <Card className={classes.root}>
      <CardActionArea style={{ height: "100%" }}>
        <CardMedia className={classes.media} image={image} title="Item" />
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
  item: PropTypes.shape({
    title: PropTypes.string,
    brief: PropTypes.string,
    image: PropTypes.string,
    link_url: PropTypes.string,
  }),
  linkTitle: PropTypes.string,
};

CarouselCard.defaultProps = {
  linkTitle: "Learn More",
  item: undefined,
};

export default CarouselCard;
