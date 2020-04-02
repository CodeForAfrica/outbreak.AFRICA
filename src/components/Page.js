import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import NewNav from './Navigation';
import SEO from './SEO';

import config from '../config';

function Page({ children, ...props }) {
  return (
    <>
      <SEO {...props} />
      <NewNav takwimu={config} />
      {children}
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
