import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';

import Link from 'next/link'

import imageSrc from '../../../../assets/images/example/image1.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    padding: '2rem'
  },
  cover: {
    height: 0,
    width: 200,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column" justify="space-around" spacing={6} style={{ padding: '2rem 0rem' }}>
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

      <Grid container direction="row" justify="flex-end" style={{ padding: '3rem 0' }}>
        <Link href="#" style={{ textAlign: 'left' }}>View more</Link>
      </Grid>
    </Grid>
  );
}
