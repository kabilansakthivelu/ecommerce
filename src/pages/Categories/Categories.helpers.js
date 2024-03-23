import { RESULTS_PER_PAGE, TOTAL_RESULTS } from "./constants";

export const getCategoriesResults = (responseObj = {}) => {
  const { results = [] } = responseObj;
  return results;
};

export const getNextPageNumber = (selectedPage, currentPage) => {
  let nextPage;
  switch (selectedPage) {
    case "first": {
      nextPage = 0;
      break;
    }
    case "prev": {
      nextPage = currentPage > 0 ? currentPage-1 : 0;
      break;
    }
    case "next": {
      nextPage =
        currentPage === Math.ceil(TOTAL_RESULTS / RESULTS_PER_PAGE) - 1
          ? currentPage
          : currentPage+1;
      break;
    }
    case "last": {
      nextPage = Math.ceil(TOTAL_RESULTS / RESULTS_PER_PAGE) - 1;
      break;
    }
    default: {
      const tempPageNumber = parseInt(selectedPage);
      if (!isNaN(tempPageNumber)) {
        nextPage = parseInt(selectedPage) - 1;
      }
    }
  }
  return nextPage;
};
