import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className="Container">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
