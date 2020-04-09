import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import config from '../../../../config';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: '2rem'
  },
  cardRoot: {
    minHeight: '8rem',
    height: '100%',
    width: 315,
    margin: '0.2rem',
    backgroundColor: '#fafafa',
    border: '1px solid #eeeeee',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      direction: 'row',
      minHeight: '3rem',
      width: '300px'
    },

  },
  contentRoot: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  cardContent: {
    alignItems: 'flex-end',
    display: 'flex',
    flexGrow: 1,
    position: 'relative',
    marginTop: '-100%',
    margin: '2rem 7.7rem'
  },
  cardLink: {
    textDecoration: 'none'
  },
  overline: {
    color: '#fff'
  },
  bodyTitle: {
    color: '#fff',
    fontWeight: 500,
    marginTop: '1rem'
  },
  bodyText: {
    color: '#fff',
    margin: '1rem 0'
  },
  media: {
    filter: 'sepia(100%) hue-rotate(159deg) brightness(40%) saturate(350%)',
    transition: 'all 300ms',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
}));

function ImageDrawerContent() {
  const classes = useStyles()
  const { tileData } = config;
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="flex-start">
        {tileData.map(story =>
          <Card className={classes.cardRoot}>
            <a
              href={story.link}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.cardLink}
            >
              <CardActionArea
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  flexFlow: 'column',
                  height: '100%'
                }}
              >
                <CardMedia
                  component={story.media}
                  image={story.mediaSrc}
                  classes={{ media: classes.media }}
                  title="Story"
                />

                <CardContent className={classes.cardContent}>
                  <Grid
                    container
                    item
                    direction="column"
                    className={classes.contentRoot}
                    alignItems="flex-start"
                  >
                    <Typography variant="h5" className={classes.bodyTitle}>
                      {story.title}
                    </Typography>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </a>
          </Card>
        )}
      </Grid>
    </div>

  );
}

ImageDrawerContent.propTypes = {
  story: PropTypes.shape().isRequired
};

export default ImageDrawerContent;
