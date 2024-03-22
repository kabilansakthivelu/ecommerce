import PropTypes from "prop-types";
import "./Input.css";

const Index = ({ label, value, handleChange, type, identifier, placeholder = 'Enter' }) => {
  return (
    <div className="fieldWrapper">
      <label htmlFor={identifier}>{label}</label>
      <input
        type={type}
        id={identifier}
        onChange={handleChange}
        placeholder={placeholder}
        className="inputField"
        value={value}
      />
    </div>
  );
};

Index.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string,
  identifier: PropTypes.string,
  placeholder: PropTypes.string,
};

Index.defaultProps = {
  label: "",
  value: "",
  handleChange: () => {},
  type: "",
  identifier: "",
  placeholder: 'Enter',
};

export default Index;
