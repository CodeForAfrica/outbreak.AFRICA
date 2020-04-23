import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import carousel1 from 'assets/images/carusel-1.png';
import carousel2 from 'assets/images/carusel-2.png';
import carousel3 from 'assets/images/carousel3.png';
import CarouselCard from './CarouselCard';

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
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      position: 'absolute',
      top: '50px',
    },
  },
  buttonGrid: {
    marginLeft: '1rem',
  },
  button: {
    backgroundColor: '#fafafa',
    boxShadow: '0px 3px 6px #00000029',
  },
  carousel: {},
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

const carouselItems = [
  {
    title: 'Coronavirus update',
    brief:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: '#',
    linkTitle: 'Learn More',
    mediaLink: carousel1,
  },
  {
    title: 'A new drug',
    brief:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: '#',
    linkTitle: 'Learn More',
    mediaLink: carousel2,
  },
  {
    title: 'Stay healthy',
    brief:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: '#',
    linkTitle: 'Learn More',
    mediaLink: carousel3,
  },
];

function HeroCarousel() {
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
      removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {carouselItems.map((item) => (
        <CarouselCard item={item} />
      ))}
    </Carousel>
  );
}

export default HeroCarousel;
