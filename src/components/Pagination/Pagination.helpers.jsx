export const getCursorStyle = (key, currentPage, totalPages) => {
  let style = "pointer";
  if ((key === "prev" || key === "first") && currentPage === 0) {
    style = "not-allowed";
  } else if (
    (key === "last" || key === "next") &&
    currentPage === totalPages - 1
  ) {
    style = "not-allowed";
  }
  return { cursor: style };
};
