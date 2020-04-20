import Carousel from "react-multi-carousel";
import CarouselCard from './CarouselCard';

import "react-multi-carousel/lib/styles.css";
import carousel1 from "../../assets/images/carusel-1.png";
import carousel2 from "../../assets/images/carusel-2.png"
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
 
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
    items: 1.5
  }
};

const useStyles = makeStyles(() => ({
  buttonGrid: {
    position: 'absolute',
    top: '50px',
  },
  button: {
    backgroundColor: '#fafafa',
    boxShadow: '0px 3px 6px #00000029',
  }
}));

function CustomArrowButtons() {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.buttonGrid}>
    <Grid item>
      <IconButton aria-label="back" color="secondary" className={classes.button}>
        <ArrowBackIcon />
      </IconButton>
      </Grid>
      <Grid item>
      <IconButton aria-label="forward" color="secondary" className={classes.button}>
        <ArrowForwardIcon />
      </IconButton>
      </Grid>
    </Grid>
  )
}

const carouselItems = [
 {
   title: "Coronavirus update",
   brief: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
   link: "#",
   linkTitle: "Learn More",
   mediaLink: carousel1 
 },
 {
  title: "A new drug",
  brief: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  link: "#",
  linkTitle: "Learn More",
  mediaLink: carousel2
}]

function HeroCarousel(props) {
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
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {carouselItems.map(item => <CarouselCard item={item} /> )}
    </Carousel>
  );
}

export default HeroCarousel;