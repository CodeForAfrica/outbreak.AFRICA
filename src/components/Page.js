import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import config from 'config';

import Footer from './Footer';
import Navigation from './Navigation';
import SEO from './SEO';

const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'hidden',
  },
  section: {},
}));

function Page({ children, classes: classesProp, ...props }) {
  const classes = useStyles({ classes: classesProp });
  return (
    <div className={classes.root}>
      <SEO {...props} />
      <Navigation takwimu={config} classes={{ section: classes.section }} />
      {children}
      <Footer takwimu={config} classes={{ section: classes.section }} />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
};

Page.defaultProps = {
  title: undefined,
};

export default Page;
