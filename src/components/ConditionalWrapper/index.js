import PropTypes from "prop-types";
import React from "react";

/**
 *
 * Wraps children with wrapper if condition is met
 */
function ConditionalWrapper({ children, condition, wrapper, ...props }) {
  if (!condition) {
    return children;
  }
  const Component = wrapper || React.Fragment;
  return <Component {...props}>{children}</Component>;
}

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool,
  wrapper: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};

ConditionalWrapper.defaultProps = {
  condition: undefined,
  wrapper: undefined,
};

export default ConditionalWrapper;
