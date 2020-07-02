import React from "react";
import PropTypes from "prop-types";

import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Carousel from "react-multi-carousel";

import CarouselCard from "./CarouselCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.05,
  },
};

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      position: "absolute",
      top: "50px",
    },
  },
  buttonGrid: {
    marginLeft: "1rem",
  },
  button: {
    backgroundColor: "#fafafa",
    boxShadow: "0px 3px 6px #00000029",
  },
  carousel: {},
  carouselBodyText: {
    display: "none",
  },
  carouselCardLink: {
    display: "none",
  },
  carouselBodyTitle: {
    color: "initial",
    margin: 0,
  },
  carouselMedia: {
    height: "18rem",
    minHeight: "18rem",
  },
  carouselRoot: {
    height: "23rem",
    minHeight: "23rem",
    border: 0,
    backgroundColor: "unset",
    borderRadius: 0,
    boxShadow: "unset",
  },
  carouselContentRoot: {
    display: "block",
    height: "5rem",
    paddingTop: "1rem",
    position: "relative",
    top: "initial",
    left: "initial",
  },
}));

function CustomArrowButtons({ next, previous }) {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.buttonContainer}>
      <Grid item className={classes.buttonGrid}>
        <IconButton
          aria-label="back"
          color="secondary"
          className={classes.button}
          onClick={() => previous()}
        >
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item className={classes.buttonGrid}>
        <IconButton
          aria-label="forward"
          color="secondary"
          className={classes.button}
          onClick={() => next()}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

function HeroCarousel({
  deviceType,
  carouselItems,
  carouselLinkTitle,
  isResearch,
}) {
  const classes = useStyles();
  if (!carouselItems || carouselItems.length === 0) {
    return null;
  }
  return (
    <Carousel
      swipeable
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr // means to render carousel on server-side.
      infinite
      autoPlay={false}
      keyBoardControl
      renderButtonGroupOutside
      customButtonGroup={<CustomArrowButtons />}
      autoPlaySpeed={5000}
      deviceType={deviceType}
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {carouselItems.map((item) => (
        <CarouselCard
          key={item.title}
          item={item}
          linkTitle={carouselLinkTitle}
          classes={
            isResearch && {
              media: classes.carouselMedia,
              bodyTitle: classes.carouselBodyTitle,
              bodyText: classes.carouselBodyText,
              cardLink: classes.carouselCardLink,
              root: classes.carouselRoot,
              contentRoot: classes.carouselContentRoot,
            }
          }
        />
      ))}
    </Carousel>
  );
}

HeroCarousel.propTypes = {
  carouselItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  carouselLinkTitle: PropTypes.string,
  isResearch: PropTypes.bool.isRequired,
};

HeroCarousel.defaultProps = {
  carouselItems: undefined,
  carouselLinkTitle: undefined,
};

export default HeroCarousel;
