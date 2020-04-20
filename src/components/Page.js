import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Navigation from './Navigation';
import SEO from './SEO';

import config from '../config';
import { Grid } from '@material-ui/core';

function Page({ children, ...props }) {
  return (
    <>
      <SEO {...props} />
      <NewNav takwimu={config} />
      {children}
      <Grid container style={{ height: '15rem' }} />
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
