import { useState, useRef } from 'react';
import PropTypes from "prop-types";
import "./Input.css";

const Index = ({
  label,
  value,
  handleChange,
  type,
  identifier,
  placeholder = "Enter",
  enableShowPassword
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef();

  const handleShowPasswordToggle = () => {
    if (inputRef && inputRef.current) {
      const currentType = inputRef.current.type;
      inputRef.current.type = currentType === "text" ? "password" : "text";
      setShowPassword(!showPassword);
    }
  };

  const getInputSuffix = () => {
    return (
      <span onClick={handleShowPasswordToggle} style={{ cursor: "pointer" }}>
        {showPassword ? 'Hide' : 'Show'}
      </span>
    );
  };
  return (    
    <div className="fieldWrapper">
      <label htmlFor={identifier}>{label}</label>
      <div className="inputWrapper">
        <input
          ref={inputRef}
          type={type}
          id={identifier}
          onChange={(e) => handleChange(identifier, e.target.value)}
          placeholder={placeholder}
          value={value}
          className="input-field"
        />
        {enableShowPassword && (getInputSuffix())}
      </div>
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
  enableShowPassword: PropTypes.bool,
};

Index.defaultProps = {
  label: "",
  value: "",
  handleChange: () => {},
  type: "",
  identifier: "",
  placeholder: "Enter",
  enableShowPassword: false,
};

export default Index;
