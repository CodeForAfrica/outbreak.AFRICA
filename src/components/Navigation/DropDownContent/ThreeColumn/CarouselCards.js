
import React from 'react';
import { Card, CardMedia, Grid, Typography, CardActionArea, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import mediasrc from '../../../../assets/images/example/image2.jpeg'

const useStyles = makeStyles({
  root: {
    width: 400,
    minHeight: 350,
    height: '100%',
    background: '#EEE',
    filter: 'grayscale(1)',
    transition: 'all 300ms',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  media: {
    height: 350,
    paddingTop: '56.25%', // 16:9
  },
  card: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    padding: '2rem'
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
});

function CarouselCards() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <a
        href='#'
        target="_blank"
        rel="noopener noreferrer"
      //className={classes.cardLink}
      >
        <CardMedia image={mediasrc} className={classes.media} />
        <Grid container direction="column" justify="flex-start" className={classes.overlay}>
          <Typography variant="h6">VISUALIZATION </Typography>
          <Typography variant="subtitle1">The Economy: 15 years in 15 seconds  </Typography>
          <Typography variant="body2">How american jobs and wages changs in 15 years </Typography>
          <Typography variant="caption">Read more here </Typography>
        </Grid>

      </a>
    </Card>

  )
}

export default CarouselCards
