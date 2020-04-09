import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';

import Link from 'next/link'

import imageSrc from '../../../../assets/images/example/image1.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
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
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '1rem',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
}));

export default function Publications() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column" justify="space-around" spacing={4} style={{ padding: '1rem 0rem' }}>
      <Grid item>
        <Paper className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={imageSrc}
            title="Live from space album cover"
          />
          <CardContent className={classes.content}>
            <Typography variant="caption">CAPTION HERE</Typography>
            <Typography component="h5" variant="subtitle1">Lorem ipsum </Typography>
            <Typography variant="caption">Read the report</Typography>
            <Divider light width="100" />
          </CardContent>
        </Paper>
      </Grid>


      <Grid item>
        <Paper className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={imageSrc}
            title="Live from space album cover"
          />
          <CardContent className={classes.content}>
            <Typography variant="caption">CAPTION HERE</Typography>
            <Typography component="h5" variant="subtitle1">Lorem ipsum</Typography>
            <Typography variant="caption">Read the report</Typography>
            <Divider light width="100" />
          </CardContent>
        </Paper>
      </Grid>

      <Grid container direction="row" justify="flex-end" className={classes.linkGrid}>
        <Link href="#" ><a href="#" className={classes.link}>View more</a></Link>
      </Grid>
    </Grid>
  );
}
