import { useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import "./OtpInput.css";

const OtpInput = forwardRef(({ digitsCount }, ref) => {
  useEffect(() => {
    if (ref && ref.current) {
      ref.current[0].focus();
    }
  }, [])
  
  const handleInputChange = (e, index) => {
    const enteredValue = e.target.value;
    const updatedValue = enteredValue.slice(enteredValue.length - 1);
    ref.current[index].value = updatedValue;
    if (index < digitsCount - 1 && updatedValue.length > 0) {
      ref.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    ref.current[index].setSelectionRange(1, 2);
  };

  const handleKeyDown = (e, index) => {
    if (e.code === 'Backspace' && index > 0 && ref.current[index].value === '') {
      ref.current[index - 1].focus();
    }
  }
 
  const getInputComponent = () => {
    const inputContainer = [];
    for (let i = 0; i < digitsCount; i++) {
      inputContainer.push(
        <input
          className="otp--input"
          ref={(el) => (ref.current[i] = el)}
          key={i}
          onChange={(e) => handleInputChange(e, i)}
          onClick={() => handleClick(i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />,
      );
    }
    return inputContainer;
  };

  return <div className="otp--inputWrapper">{getInputComponent()}</div>;
});

OtpInput.propTypes = {
  digitsCount: PropTypes.number,
};

OtpInput.defaultProps = {
  digitsCount: 0,
};

export default OtpInput;
