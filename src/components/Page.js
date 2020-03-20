import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import config from '../config';

function Page({ children }) {
  return (
    <>
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
