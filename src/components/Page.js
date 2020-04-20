import React from 'react';
import PropTypes from 'prop-types';

import config from 'config';

import Footer from './Footer';
import Navigation from './Navigation';
import SEO from './SEO';

import { Grid } from '@material-ui/core';

function Page({ children, ...props }) {
  return (
    <>
      <SEO {...props} />
      <Navigation takwimu={config} />
      {children}
      <Grid style={{ height: '15rem' }} />
      <Footer takwimu={config} />
    </>
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
