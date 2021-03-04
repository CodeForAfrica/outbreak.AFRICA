import PropTypes from "prop-types";

/**
 *
 * Wraps children with wrapper if condition is met
 */
const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrapper: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
};
export default ConditionalWrapper;
