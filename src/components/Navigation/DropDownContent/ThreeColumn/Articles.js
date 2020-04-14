import React from 'react';
import {
  Typography,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import PropTypes from 'prop-types';

import config from '../../../../config';
import imageSrc from '../../../../assets/images/example/image1.jpeg'

const useStyles = makeStyles(theme => ({
  contentRoot: {
    borderBottom: '0.5px solid grey',
    width: '75%'
  },
  typoGrid: {
    padding: '1rem 0rem'
  },
  mediaGrid: {
    padding: '1rem 0rem'
  },
  media: {
    width: 80,
    minHeight: 50,
    height: '100%'
  },
  caption: {
    fontWeight: 'bolder',
    lineHeight: '1.3rem',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  mainContainer: {
    padding: '1.5rem 0rem'
  },
  linkGrid: {
    padding: '1.5rem 4.5rem'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '1rem',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  subtitle: {
    textTransform: 'uppercase'
  }
}));

function ArticlesContent({ title, subtitle }) {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.contentRoot}>
      <Grid item xs={8} className={classes.typoGrid}>
        <div><Typography variant="caption" className={classes.subtitle}>{subtitle}</Typography></div>
        <div><Typography variant="body2" className={classes.caption}>{title}</Typography></div>
      </Grid>

      <Grid item xs={4} className={classes.mediaGrid}>
        <img alt="thumbnail" src={imageSrc} className={classes.media} />
      </Grid>
    </Grid>
  )
}

ArticlesContent.propTypes = {
  title: PropTypes.stringisRequired,
  subtitle: PropTypes.stringisRequired
};


export default function Articles() {
  const { leftColumn } = config;
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      {leftColumn.map(story =>
        <ArticlesContent
          key={story.index}
          subtitle={story.subtitle}
          title={story.title}
          img={story.img}
        />
      )}
      <Grid container direction="row" justify="flex-end" className={classes.linkGrid}>
        <Link href="#" ><a href="#" className={classes.link}>View more</a></Link>
      </Grid>
    </div>
  )
}
