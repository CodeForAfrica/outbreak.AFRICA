import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';

import Link from 'next/link'

import imageSrc from '../../../../assets/images/example/image1.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1.5rem 0rem'
  },
  paperRoot: {
    display: 'flex',
    height: '12rem'
  },
  content: {
    paddingLeft: '2rem',
  },
  cover: {
    width: 180,
  },
  linkGrid: {
    padding: '1.5rem 0.8rem'
  },
  captionLink: {
    textDecoration: 'none',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '1rem',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
}));


const cardInfo = [
  {
    subtitle: 'Caption',
    title: 'Lorem ipsum',
    link: '/'
  },
  {
    subtitle: 'Caption',
    title: 'Lorem ipsum too',
    link: '/'
  }
]

function PublicationContent({ link, title, subtitle }) {
  const classes = useStyles();
  return (
    <Grid item>
      <Paper className={classes.paperRoot}>
        <CardMedia
          className={classes.cover}
          image={imageSrc}
          title="Example image"
        />
        <CardContent className={classes.content}>
          <Typography variant="caption">{subtitle}</Typography>
          <Typography component="h5" variant="subtitle1">{title} </Typography>
          <div>
            <Typography variant="caption"><a href={link} className={classes.captionLink}>Read the report</a></Typography>
            <Divider light width="100" />
          </div>
        </CardContent>
      </Paper>
    </Grid>
  )
}


PublicationContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

PublicationContent.defaultProps = {
  title: '',
  subtitle: ''
};


export default function Publications() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column" justify="space-around" spacing={4} className={classes.root}>
      {cardInfo.map(card =>
        <PublicationContent
          title={card.title}
          subtitle={card.subtitle}
          link={card.link}
        />)}

      <Grid container direction="row" justify="flex-end" className={classes.linkGrid}>
        <Link href="#" ><a href="#" className={classes.link}>View more</a></Link>
      </Grid>
    </Grid>
  );
}
