import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from 'components/Join/Form';
import Subscribe from 'components/Partners/Subscribe'

const useStyles = makeStyles((theme) => ({
  root: {}
}));

function Content({ title, subtitle }) {
  return (
    <div>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">
        {subtitle}
      </Typography>
    </div>
  )
}

function Join() {
  const classes = useStyles();
  return (
    <div>
      <Content
        title="JOIN US"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
      />
      <Grid container direction="row" justify="flex-start" spacing={3} style={{ padding: '3rem 0rem' }}>
        <Grid item xs={12} md={3} style={{ backgroundColor: '#170F49' }}>
          <Subscribe />
        </Grid>
        <Grid item xs={12} md={8}>
          <Form />
        </Grid>
      </Grid>
    </div>
  )
}

export default Join
