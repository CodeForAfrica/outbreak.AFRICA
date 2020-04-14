
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import CarouselCards from './CarouselCards';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const useStyles = makeStyles({
  root: {
    maxwidth: '1000px',
    margin: '0 auto',
    paddingRight: '40px'
  },
  icon: {
    backgroundColor: 'white'
  }
});


function Carousel() {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;
  return (
    <div className={classes.root}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={300}
        leftChevron={<IconButton className={classes.icon}><ArrowBackIosRoundedIcon fontSize="small" /></IconButton>}
        rightChevron={<IconButton className={classes.icon}><ArrowForwardIosRoundedIcon fontSize="small" /></IconButton>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <CarouselCards />
        <CarouselCards />
        <CarouselCards />
        <CarouselCards />
      </ItemsCarousel >
    </ div >
  )
}

export default Carousel
