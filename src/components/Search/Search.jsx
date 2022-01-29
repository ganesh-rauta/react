import React from "react";

const Search = ({setSearch}) => {
  return (
    <div>
      <form action="" className="d-flex justify-content-center gap-4 my-5">
        <input
          type="text"
          placeholder="Search for character"
          className="w-25 px-3 py-2 rounded-3 border-2 border-primary"
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={e => e.preventDefault()} className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default Search;
