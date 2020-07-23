import React from "react";
import PropTypes from "prop-types";

import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  link: {
    borderBottom: "2px solid",
    borderRadius: 0,
    padding: 0,
  },
  title: {
    paddingBottom: "1.25rem",
  },
  brief: {
    paddingBottom: "1.5rem",
  },
}));

function JoinUs({ title, description, linkLabel }) {
  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="subtitle1" className={classes.brief}>
        {description}
      </Typography>
      <Button variant="outlined" color="secondary" className={classes.link}>
        {linkLabel}
      </Button>
    </Grid>
  );
}

JoinUs.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linkLabel: PropTypes.string,
};

JoinUs.defaultProps = {
  title: "Join Us",
  description: "Be part of the initiative",
  linkLabel: "Learn More",
};
export default JoinUs;
