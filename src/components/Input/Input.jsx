import { forwardRef } from 'react';
import PropTypes from "prop-types";
import "./Input.css";

const Index = forwardRef(({
  label,
  value,
  handleChange,
  type,
  identifier,
  placeholder = "Enter",
  suffix,
}, ref) => {
  return (
    <div className="fieldWrapper">
      <label htmlFor={identifier}>{label}</label>
      <div className="inputWrapper">
        <input
          ref={ref}
          type={type}
          id={identifier}
          onChange={(e) => handleChange(identifier, e.target.value)}
          placeholder={placeholder}
          value={value}
          className="input-field"
        />
        {suffix}
      </div>
    </div>
  );
});

Index.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string,
  identifier: PropTypes.string,
  placeholder: PropTypes.string,
  suffix: PropTypes.element,
};

Index.defaultProps = {
  label: "",
  value: "",
  handleChange: () => {},
  type: "",
  identifier: "",
  placeholder: "Enter",
  suffix: <></>,
};

export default Index;
