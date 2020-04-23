import React from 'react';
import PropTypes from 'prop-types';

import config from 'config';

import Footer from './Footer';
import Navigation from './Navigation';
import SEO from './SEO';

function Page({ children, ...props }) {
  return (
    <>
      <SEO {...props} />
      <Navigation takwimu={config} />
      {children}
      <Footer takwimu={config} />
    </>
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
