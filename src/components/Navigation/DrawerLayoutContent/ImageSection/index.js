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
import { withStyles } from '@material-ui/core/styles';

import config from '../../../../config';

const styles = theme => ({
  mainRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    /**
     * The mixture of rem and px set by GridList is
     * causing height issues resulting in overflow.
     * Stick to px for this component to function correctly.
     */
    height: '370px' // 23.125rem
  },
  cardRoot: {
    minHeight: '10rem',
    height: '100%',
    width: 350,
    margin: '0.2rem',
    backgroundColor: '#fafafa',
    border: '1px solid #eeeeee',
    '&:hover': {
      backgroundColor: '#fff'
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
  cardMedia: {
    minHeight: '10rem',
    height: '100%',
    width: '100%'
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
    filter: 'sepia(100%) hue-rotate(159deg) brightness(40%) saturate(350%)'
  }
});

function ImageDrawerContent({ classes }) {
  const { tileData } = config;
  return (
    <div className={classes.mainRoot}>
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
                  className={classes.cardMedia}
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
                    style={{ height: '100%' }}
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
  classes: PropTypes.shape().isRequired,
  story: PropTypes.shape().isRequired
};

export default withStyles(styles)(ImageDrawerContent);
