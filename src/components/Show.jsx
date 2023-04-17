import PropTypes from "prop-types";

const Show = ({ when, children }) => {
  if (when) {
    return <>{children}</>;
  }
  return null;
};

Show.propTypes = {
  when: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Show;
