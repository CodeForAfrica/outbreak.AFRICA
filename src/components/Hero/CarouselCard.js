import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core';

import A from '@hurumap-ui/core/A';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '22rem',
    height: '100%',
    backgroundColor: '#fafafa',
    border: '1px solid #eeeeee',
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
      backgroundColor: '#fff'
    },
    [theme.breakpoints.up('md')]: {
      marginRight: '1.25rem',
      minHeight: '30rem',
    }
  },
  contentRoot: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  cardContent: {
    alignItems: 'flex-end',
    display: 'flex',
    flexGrow: 1,
    position: 'relative',
    marginTop: '-100%',
    paddingTop: 0,
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3)
  },
  media: {
    minHeight: '20rem',
    height: '100%',
    width: '100%'
  },
  cardLink: {
    textDecoration: 'underline',
    textTransform: 'uppercase',
    color: '#F9FF71',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  overline: {
    color: '#fff'
  },
  bodyTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.125rem',
    marginTop: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem'
    }
  },
  bodyText: {
    color: '#fff',
    margin: '1rem 0'
  }
}));

function CarouselCard({ item }) {
  const classes = useStyles();;

  return (
    <Card className={classes.root}>
        <CardActionArea
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            flexFlow: 'column',
            height: '100%'
          }}
        >
          <CardMedia
            className={classes.media}
            image={item.mediaLink}
            title="Item"
          />
          <CardContent className={classes.cardContent}>
            <Grid
              container
              item
              direction="column"
              className={classes.contentRoot}
              alignItems="flex-start"
              style={{ height: '100%' }}
            >
              <Typography variant="h5" className={classes.bodyTitle}>
                {item.title}
              </Typography>
              <Typography variant="body2" className={classes.bodyText}>
                {item.brief}
              </Typography>
              <A href={item.link} className={classes.cardLink}>
                {item.linkTitle}
              </A>
            </Grid>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}

CarouselCard.propTypes = {
  item: PropTypes.shape().isRequired
};

export default CarouselCard;
