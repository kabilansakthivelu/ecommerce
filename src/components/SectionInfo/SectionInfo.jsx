import PropTypes from "prop-types";
import "./SectionInfo.css";

const SectionInfo = ({ showHeading, heading, showSubHeading, subHeading, showMessage, message }) => {
  return (
    <>
      {showHeading && <h3 className="heading">{heading}</h3>}
      {showSubHeading && <p className="sub-heading">{subHeading}</p>}
      {showMessage && <p className="message">{message}</p>}
    </>
  );
};

SectionInfo.propTypes = {
  showHeading: PropTypes.bool,
  showSubHeading: PropTypes.bool,
  showMessage: PropTypes.bool,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  message: PropTypes.string,
};

SectionInfo.defaultProps = {
  showHeading: false,
  showSubHeading: false,
  showMessage: false,
  heading: '',
  subHeading: '',
  message: '',
};

export default SectionInfo;
