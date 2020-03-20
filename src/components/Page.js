import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Navigation from './Navigation';
import config from '../config';

function Page({ children, takwimu }) {
  return (
    <>
      <Navigation takwimu={takwimu} />
      {children}
      <Footer takwimu={takwimu} />
    </>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  takwimu: PropTypes.shape({}).isRequired,
  title: PropTypes.string
};

Page.defaultProps = {
  title: undefined
};

export default Page;
