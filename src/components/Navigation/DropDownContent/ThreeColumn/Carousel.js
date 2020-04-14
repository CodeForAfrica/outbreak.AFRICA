
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    //padding: '0 20px',
    maxwidth: '1000px',
    margin: '0 auto',
    paddingRight: '40px'
  }
});


function Carousel() {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 20;
  return (
    <div className={classes.root}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 400, background: '#EEE' }}>Image card</div>
        <div style={{ height: 400, background: '#EEE' }}>Image card</div>
        <div style={{ height: 400, background: '#EEE' }}>Image card</div>
        <div style={{ height: 400, background: '#EEE' }}>Image card</div>
      </ItemsCarousel>
    </ div>
  )
}

export default Carousel
