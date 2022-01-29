import React from "react";

const Pagination = ({ setPageNumber, pageNumber }) => {
  const prev = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber((x) => x - 1);
  };
  const Next = () => {
    setPageNumber((x) => x + 1);
  };
  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button className="btn btn-primary" onClick={prev}>
        Prev
      </button>
      <button className="btn btn-primary" onClick={Next}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
