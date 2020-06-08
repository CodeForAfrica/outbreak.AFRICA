import React from "react";
import PropTypes from "prop-types";

import MenuList from "./MenuList";

function DataMenuList({ country, countries, ...props }) {
  const selected = ({ isoCode }) => country && country.isoCode === isoCode;
  const toAs = ({ isoCode }) => `/data/country-${isoCode}`;
  const toHref = () => "/data/[geoId]";
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
  countries: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  country: PropTypes.shape({ isoCode: PropTypes.string }),
};

DataMenuList.defaultProps = {
  country: undefined,
};

export default DataMenuList;
