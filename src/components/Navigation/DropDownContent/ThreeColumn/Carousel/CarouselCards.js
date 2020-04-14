
import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardMedia, Grid, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import mediasrc from '../../../../../assets/images/example/image2.jpeg'

const useStyles = makeStyles({
  root: {
    width: 400,
    minHeight: 350,
    height: '100%',
    background: '#EEE',
    position: 'relative',
    transition: 'all 300ms',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    padding: '5rem 2.5rem'
  },
  media: {
    height: 350,
    paddingTop: '56.25%', // 16:9
    filter: ' grayscale(2%) sepia(1%) hue-rotate(27deg) invert(28%);',
  },
  contentRoot: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  cardContent: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    position: 'relative',
    marginTop: '-100%',
    margin: '2rem 7.7rem'
  },
  textEdit: {
    lineHeight: 1.3
  },
  readmore: {
    padding: '1rem 0rem'
  },
  divider: {
    color: 'white'
  },
  subheading: {
    
  }
});


function CarouselCards({ link, title, subheading, description }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardMedia image={mediasrc} className={classes.media} />
        <Grid container direction="column" justify="flex-start" className={classes.overlay}>
          <Typography variant="body2" className={classes.subheading}>{subheading}</Typography>
          <div>
            <Typography variant="subtitle2" className={classes.textEdit}>{title}</Typography>
            <Typography variant="body2" className={classes.textEdit}>{description}</Typography>
          </div>
          <div className={classes.readmore}>
            <Typography variant="caption">Learn More</Typography>
            <Divider width={60} className={classes.divider} />
          </div>
        </Grid>
      </a>
    </Card>

  )
}

CarouselCards.propTypes = {
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

CarouselCards.defaultProps = {
  title: '',
  description: '',
  subheading: '',
  link: ''
};


export default CarouselCards
