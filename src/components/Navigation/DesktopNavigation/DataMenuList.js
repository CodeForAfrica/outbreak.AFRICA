import React from "react";
import PropTypes from "prop-types";

import config from "config";

import MenuList from "./MenuList";

function DataMenuList({ country, ...props }) {
  const { countries } = config;
  const selected = ({ isoCode }) => country && country.isoCode === isoCode;
  const toAs = ({ isoCode }) => `/country-${isoCode}`;
  const toHref = () => "/[geoIdOrSlug]";
  const toName = ({ shortName }) => shortName;

  return (
    <MenuList
      items={countries}
      underline="none"
      selected={selected}
      toAs={toAs}
      toHref={toHref}
      toName={toName}
      {...props}
    />
  );
}

DataMenuList.propTypes = {
  country: PropTypes.shape({ isoCode: PropTypes.string.isRequired }),
};

DataMenuList.defaultProps = {
  country: undefined,
};

export default DataMenuList;
