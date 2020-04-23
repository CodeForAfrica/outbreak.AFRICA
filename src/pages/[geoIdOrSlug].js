import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import ProfilePageComponent from 'components/ProfilePage';
import config from 'config';
import { getSectionedCharts } from 'cms';

function ProfilePage(initialProps) {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://dashboard.hurumap.org"
          crossOrigin="anonymous"
        />
        {/** Flourish */}
        <link
          rel="preconnect"
          href="https://upload.wikimedia.org"
          crossOrigin="anonymous"
        />
        {/** Graphql Preconnect */}
        <link
          rel="preconnect"
          href={config.graphqlOrigin}
          crossOrigin="anonymous"
        />
        {/** MapIt Preconnect */}
        <link
          rel="preconnect"
          href="https://dev.mapit.hurumap.org"
          crossOrigin="anonymous"
        />
        {/** Map Tiles Preconnect */}
        <link
          rel="preconnect"
          href="https://server.arcgisonline.com"
          crossOrigin="anonymous"
        />
      </Head>
      <ProfilePageComponent key={initialProps.geoId} {...initialProps} />
    </>
  );
}

ProfilePage.propTypes = {
  geoId: PropTypes.string.isRequired,
  sectionedCharts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  language: PropTypes.string.isRequired,
  indicatorId: PropTypes.string,
};

ProfilePage.defaultProps = {
  indicatorId: undefined,
};

ProfilePage.getInitialProps = async ({
  query: { geoIdOrSlug, lang: queryLang, indicatorId },
}) => {
  const country = config.countries.find(
    (c) => c.slug === geoIdOrSlug.toLowerCase()
  );
  const lang = queryLang || config.DEFAULT_LANG;

  return {
    geoId: country ? `country-${country.isoCode}` : geoIdOrSlug,
    sectionedCharts: await getSectionedCharts(lang),
    language: lang,
    indicatorId,
  };
};

export default ProfilePage;
