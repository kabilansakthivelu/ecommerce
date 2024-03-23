import PropTypes from "prop-types";
import { getCursorStyle } from "./Pagination.helpers";
import "./Pagination.css";

const Pagination = ({
  total,
  resultsPerPage,
  handleSelection,
  currentPage,
}) => {
  const totalNumberOfPages = Math.ceil(total / resultsPerPage);
  
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalNumberOfPages; i++) {
      const isActivePage = i === currentPage;
      pages.push(
        <div
          style={{
            color: isActivePage ? "black" : "inherit",
            fontWeight: isActivePage ? "bold" : "inherit",
          }}
          data-key={i}
        >
          {i}
        </div>,
      );
    }
    let startIndex = 0;
    if (currentPage > 3 && currentPage <= (totalNumberOfPages - 2)) {
      startIndex = currentPage - 3;
    } else if (currentPage > (totalNumberOfPages - 2)) {
      startIndex = totalNumberOfPages - 5;
    }
    return pages.slice(startIndex, startIndex + 5);
  };

  return (
    <aside className="pagination--container" onClick={handleSelection}>
      <div data-key="first" style={getCursorStyle('first', currentPage - 1, totalNumberOfPages)}>&lt;&lt;</div>
      <div data-key="prev" style={getCursorStyle('prev', currentPage - 1, totalNumberOfPages)}>&lt;</div>
      {getPageNumbers()}
      <div data-key="next" style={getCursorStyle('next', currentPage - 1, totalNumberOfPages)}>&gt;</div>
      <div data-key="last" style={getCursorStyle('last', currentPage - 1, totalNumberOfPages)}>&gt;&gt;</div>
    </aside>
  );
};

Pagination.propTypes = {
  total: PropTypes.number,
  resultsPerPage: PropTypes.number,
  handleSelection: PropTypes.func,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  total: 0,
  resultsPerPage: 0,
  handleSelection: () => {},
  currentPage: 0,
};

export default Pagination;
