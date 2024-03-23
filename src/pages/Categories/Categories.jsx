import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import withAuthentication from "../../hoc/withAuthentication";
import ComponentWrapper from "../../components/ComponentWrapper";
import SectionInfo from "../../components/SectionInfo";
import Pagination from "../../components/Pagination";
import { useFetch } from "../../hooks/useFetch";
import { auth, db } from "../../firebase";
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
  const [preferredCategories, setPreferredCategories] = useState({});
  const {
    data: categories,
    loading,
    error,
  } = useFetch(
    FETCH_RESULTS.replace("<offset>", currentPage * RESULTS_PER_PAGE),
    getCategoriesResults,
  );

  useEffect(() => {
    const documentRef = db.collection('userPreferredCategories').doc(auth.currentUser.uid);
    documentRef.get()
    .then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setPreferredCategories(data);
      }
    })
    .catch((error) => {
      console.error('Error fetching document:', error);
    });
  }, []);

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

  const handleCategorySelection = (e, category) => {
    const isSelected = e.target.checked;
    const tempPreferredCategories = JSON.parse(JSON.stringify(preferredCategories));
    const documentRef = db.collection('userPreferredCategories').doc(auth.currentUser.uid);
    if (isSelected) {
        tempPreferredCategories[category] = true;
        documentRef.update(tempPreferredCategories);
    } else {
      delete tempPreferredCategories[category];
      documentRef.update({
        [category]: firebase.firestore.FieldValue.delete(),
      });
    }
    setPreferredCategories(tempPreferredCategories);
  }

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
                    checked={preferredCategories[name]}
                    className="category--input"
                    onChange={(e) => handleCategorySelection(e, name)}
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

export default withAuthentication(Categories);
