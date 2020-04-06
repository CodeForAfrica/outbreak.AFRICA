import React from 'react';
import {
  Typography,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import config from '../../../../config';

const useStyles = makeStyles({
  contentRoot: {
    borderBottom: '2px solid grey'
  }
});

function LeftColumnContent({ title, subtitle, mediaSrc }) {
  const { classes } = useStyles();
  return (
    <Grid container direction="row" style={{ borderBottom: '2px solid grey' }}>
      <Grid item xs={8}>
        <div><Typography variant="caption">{subtitle}</Typography></div>
        <div><Typography variant="subtitle">{title}</Typography></div>
      </Grid>

      <Grid item xs={4}>
        <img alt="thumbnail" src={mediaSrc} />
      </Grid>
    </Grid>
  )
}

export default function LeftColumn() {
  const { leftColumn } = config;
  return (
    <div>
      {leftColumn.map(story =>
        <LeftColumnContent
          key={story.index}
          subtitle={story.subtitle}
          title={story.title}
          img={story.img}
        />
      )}
    </div>
  )
}
