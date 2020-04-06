import React from 'react';
import {
  Typography,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

import config from '../../../../config';
import imageSrc from '../../../../assets/images/example/image1.jpeg'

const useStyles = makeStyles({
  contentRoot: {
    borderBottom: '1px solid grey'
  }
});

function LeftColumnContent({ title, subtitle, mediaSrc }) {
  const { classes } = useStyles();
  return (
    <Grid container direction="row" style={{ borderBottom: '0.5px solid grey' }}>
      <Grid item xs={8} style={{ padding: '1rem 0rem' }}>
        <div><Typography variant="caption">{subtitle}</Typography></div>
        <div><Typography variant="caption" style={{ fontWeight: 'bolder' }}>{title}</Typography></div>
      </Grid>

      <Grid item xs={4} style={{ padding: '1rem 0rem' }}>
        <img alt="thumbnail" src={imageSrc} style={{ width: 80, minHeight: 50, height: '100%' }} />
      </Grid>
    </Grid>
  )
}

export default function LeftColumn() {
  const { leftColumn } = config;
  return (
    <div style={{ padding: '2rem 0rem' }}>
      {leftColumn.map(story =>
        <LeftColumnContent
          key={story.index}
          subtitle={story.subtitle}
          title={story.title}
          img={story.img}
        />
      )}
      <Grid container direction="row" justify="flex-end" style={{ padding: '3rem 0' }}>
        <Link href="#" style={{ textAlign: 'left' }}>View more</Link>
      </Grid>
    </div>
  )
}
