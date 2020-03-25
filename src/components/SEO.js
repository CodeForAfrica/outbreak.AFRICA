import React from 'react';
import { PropTypes } from 'prop-types';

import { useRouter } from 'next/router';
import Head from 'next/head';

import config from '../config';
import defaultImage from '../assets/images/cfa.png';

function SEO({ title, description, image, location = '' }) {
  const pageTitle = title ? `${title} | ${config.name}` : config.name;
  // indicatorId should override image, image should override defaultImage.
  const {
    query: { indicatorId }
  } = useRouter();
  let imageUrl = indicatorId
    ? `${config.media.imageUrl}/${indicatorId}${config.media.imageType}`
    : `${config.url}${image || defaultImage}`;

  const structuredDataOrganization = {
    __html: `{
  "@context": "http://schema.org",
  "@type": "Organization",
  "legalName": "${config.legalName || config.name}",
  "url": "${config.url}",
  "logo": "${config.url}/images/cfa.png",
  "contactPoint": [{
    "@type": "ContactPoint",
    "url": "${config.url}/contact",
    "email": "${config.settings.support.hello}",
    "contactType": "customer service"
  }],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "${config.settings.address.locality}",
    "addressRegion": "${config.settings.address.region}",
    "addressCountry": "${config.settings.address.country}",
    "postalCode": "${config.settings.address.postalCode}"
  },
  "sameAs": [
    "${config.settings.socialMedia.facebook}",
    "${config.settings.socialMedia.twitter}",
    "${config.settings.socialMedia.medium}",
    "${config.settings.socialMedia.linkedin}"
  ]
}`
  };

  return (
    <Head>
      {/* The description that appears under the title of your website appears on search engines results */}
      <meta name="description" content={description || config.description} />

      <meta name="image" content={imageUrl} />

      {/* OpenGraph (Facebook & LinkedIn) */}
      <meta
        property="og:url"
        content={`${config.url}/${location}?ref=outbreak.africa`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta
        property="og:description"
        content={description || config.description}
      />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Card (Twitter & Slack?) */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:site"
        content={`@${config.settings.socialMedia.twitter.split('/').pop()}`}
      />
      <meta name="twitter:title" content={pageTitle} />
      <meta
        name="twitter:description"
        content={description || config.description}
      />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured data (Google) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={structuredDataOrganization}
      />

      <title>{pageTitle}</title>
    </Head>
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string
};

SEO.defaultProps = {
  description: undefined,
  image: undefined,
  location: undefined,
  title: undefined
};

export default SEO;
