/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from "next/link";
import PropTypes from "prop-types";
import React from "react";

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const { as, href, prefetch, ...other } = props;

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

NextComposed.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool,
};

NextComposed.defaultProps = {
  as: undefined,
  href: undefined,
  prefetch: undefined,
};
export default NextComposed;
