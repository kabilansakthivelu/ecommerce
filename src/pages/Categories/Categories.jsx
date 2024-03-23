import { useState } from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import SectionInfo from "../../components/SectionInfo";
import Pagination from "../../components/Pagination";
import { useFetch } from "../../hooks/useFetch";
import { getCategoriesResults, getNextPageNumber } from "./Categories.helpers";
import {
  HEADING,
  MESSAGE,
  FETCH_RESULTS,
  TOTAL_RESULTS,
  RESULTS_PER_PAGE,
} from "./constants";
import "./Categories.css";

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const {
    data: categories,
    loading,
    error,
  } = useFetch(
    FETCH_RESULTS.replace("<offset>", currentPage),
    getCategoriesResults,
  );

  if (error.length) {
    alert(error);
  }

  const handlePageChange = (e) => {
    const { key: selectedPage } = e.target.dataset;
    const nextPageNumber = getNextPageNumber(selectedPage, currentPage);
    if (nextPageNumber >= 0 && nextPageNumber !== currentPage) {
      setCurrentPage(nextPageNumber);
    }
  };

  return (
    <ComponentWrapper>
      <SectionInfo
        showHeading
        showMessage
        heading={HEADING}
        message={MESSAGE}
      />
      <p className="sectionHeader">My saved interests!</p>
      {loading ? (
        <p className="loader-placeholder">Loading...</p>
      ) : (
        <>
          <div className="categories">
            {categories.map((category) => {
              const { name } = category;
              return (
                <div key={name} className="category">
                  <input
                    type="checkbox"
                    checked={true}
                    className="category--input"
                  />
                  <label className="category--label">{name}</label>
                </div>
              );
            })}
          </div>
          <Pagination
            total={TOTAL_RESULTS}
            resultsPerPage={RESULTS_PER_PAGE}
            handleSelection={handlePageChange}
            currentPage={currentPage + 1}
          />
        </>
      )}
    </ComponentWrapper>
  );
};

export default Categories;
