import React from 'react';
import { Typography } from '@material-ui/core';
import { Section } from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    flexGrow: 1
  },
  section: {},
  contentGrid: {
    padding: "1rem 0rem",
    marginLeft: '5rem'
  }
}));


function Content({ title, subtitle, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">
          {subtitle}
        </Typography>
      </Section>
    </div>
  )
}

export default Content
