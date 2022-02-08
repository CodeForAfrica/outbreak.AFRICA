import React from "react";
import PropTypes from "prop-types";

import Error from "next/error";
import Head from "next/head";

import ProfilePage from "@/outbreakafrica/components/ProfilePage";

import config from "@/outbreakafrica/config";
import { getSectionedCharts, getSitePage } from "@/outbreakafrica/cms";

function GeoId({ errorCode, ...props }) {
  if (errorCode === 404) {
    return <Error statusCode={errorCode} />;
  }

  const { geoId } = props;
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
          href="https://mapit.hurumap.org"
          crossOrigin="anonymous"
        />
        {/** Map Tiles Preconnect */}
        <link
          rel="preconnect"
          href="https://server.arcgisonline.com"
          crossOrigin="anonymous"
        />
      </Head>
      <ProfilePage key={geoId} {...props} />
    </>
  );
}

GeoId.propTypes = {
  geoId: PropTypes.string.isRequired,
  sectionedCharts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  language: PropTypes.string.isRequired,
  indicatorId: PropTypes.string,
};

GeoId.defaultProps = {
  indicatorId: undefined,
};

export async function getServerSideProps({
  params: { geoId, lang: queryLang, indicatorId = null },
}) {
  const found = /-([a-zA-Z]{2})(_|$)/.exec(geoId);
  const countryCode = found && found[1];
  const country =
    (countryCode &&
      config.countries.find((c) => c.isoCode === countryCode.toUpperCase())) ||
    null;
  const lang = queryLang || (country && country.lang) || config.DEFAULT_LANG;
  const errorCode = country ? null : 404;
  const outbreak = country ? await getSitePage("index", lang) : {};
  const sectionedCharts = country ? await getSectionedCharts(lang) : null;

  return {
    props: {
      country,
      errorCode,
      geoId,
      indicatorId,
      language: lang,
      outbreak,
      sectionedCharts,
    },
  };
}

export default GeoId;
