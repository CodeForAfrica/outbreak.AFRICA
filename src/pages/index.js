import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Page from '../components/Page';
import config from '../config';

function Home({ takwimu }) {
  const {
    page: {}
  } = takwimu;

 
  return (
    <Page takwimu={config}>
    <div>Example page</div>
    </Page>
  );
}

Home.propTypes = {
  takwimu: PropTypes.shape({
    page: PropTypes.shape({})
  }).isRequired
};



export default Home;
