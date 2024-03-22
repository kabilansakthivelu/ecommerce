import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ title, handleClick }) => {
  return <button className="button" onClick={handleClick}>{title}</button>
};

Button.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  title: '',
  handleClick: () => {},
}

export default Button;