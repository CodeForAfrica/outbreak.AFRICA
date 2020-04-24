import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  initiative: {
    display: 'block',
  },
  support: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      marginTop: '1.5rem',
    },
  },
}));

function About({ about, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Typography variant="caption" className={classes.initiative}>
        {about.about}
      </Typography>
      <br />
      <Typography variant="caption" className={classes.support}>
        {about.initiative}
      </Typography>
    </div>
  );
}

About.propTypes = {
  about: PropTypes.shape({
    about: PropTypes.string.isRequired,
    initiative: PropTypes.string.isRequired,
  }).isRequired,
};

export default About;
