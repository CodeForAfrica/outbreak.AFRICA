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
      left: 0,
      mixBlendMode: "multiply",
      opacity: 0.5,
      position: "absolute",
      right: 0,
      top: 0,
    },
    "&:hover": {
      opacity: 1,
      backgroundColor: "#fff",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "1.25rem",
      minHeight: "30rem",
    },
  },
  content: {
    zIndex: 1,
  },
  contents: {
    padding: "1rem",
    position: "absolute",
    top: "20%",
    left: "35px",
    width: "90%",
    [theme.breakpoints.up("md")]: {
      top: "45%",
      left: "15px",
    },
    [theme.breakpoints.up("lg")]: {
      top: "57.5%",
      left: "15px",
    },
    [theme.breakpoints.up("xl")]: {
      top: "37%",
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

function CarouselCard({ item, linkTitle, ...props }) {
  const classes = useStyles(props);

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
          className={classes.contents}
          alignItems="flex-start"
        >
          {title && (
            <Grid item className={classes.content}>
              <Typography variant="subtitle2" className={classes.bodyTitle}>
                {title}
              </Typography>
            </Grid>
          )}
          {brief && (
            <Grid item className={classes.content}>
              <Typography variant="caption" className={classes.bodyText}>
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
