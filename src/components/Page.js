import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import config from 'config';

import Footer from './Footer';
import Navigation from './Navigation';
import SEO from './SEO';

const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'hidden'
  }
}));

function Page({ children, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <SEO {...props} />
      <Navigation takwimu={config} />
      {children}
      <Footer takwimu={config} />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string
};

Page.defaultProps = {
  title: undefined
};

export default Page;
