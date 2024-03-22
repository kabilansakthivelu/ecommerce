import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ redirectionPath, redirectionText, nextPage }) => {
  return (
    <p className="footer">
      {redirectionText} <Link to={redirectionPath}>{nextPage}</Link>
    </p>
  );
};

Footer.propTypes = {
  redirectionPath: PropTypes.string,
  redirectionText: PropTypes.string,
  nextPage: PropTypes.string,
};

Footer.defaultProps = {
  redirectionPath: "",
  redirectionText: "",
  nextPage: "",
};

export default Footer;
