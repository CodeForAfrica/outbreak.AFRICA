
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


const carouselData = [
  {
    subtitle: 'Visualization',
    title: ' The Economy: 15 years in 15 seconds',
    description: 'How american jobs and wages changs in 15 years',
    link: '#'
  },
  {
    subtitle: 'Visualization',
    title: ' Democracy Demographics: A look at Alabama',
    description: 'Every state has its own primary or caucus, but they each hold national importance.',
    link: '#'
  },
  {
    subtitle: 'Visualization',
    title: ' Government Revenue and Expediture',
    description: 'Understand the size and state of the American people with this Census Bureau data.',
    link: '#'
  },
]

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
        {carouselData.map(info =>
          <CarouselCards
            subheading={info.subheading}
            title={info.title}
            description={info.description} />
        )}
      </ItemsCarousel >
    </ div >
  )
}

export default Carousel
