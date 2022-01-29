import React, { useState, useEffect } from "react";
import Card from "./components/Cards/Cards";
import Filter from "./components/Filters/Filter";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber);
  const [fetchData, updateFetchData] = useState([]);
  const [search, setSearch] = useState("");
  const { info, results } = fetchData;
console.log(info)
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((response) => response.json());
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <>
      <div>
        <h1 className="text-center ubantu my-4">
          Ricky & Morty <span className="text-primary">Wiki</span>
        </h1>
        <Search setSearch={setSearch}/>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Filter />
            </div>
            <div className="col-8">
              <div className="row">
                <Card results={results} />
              </div>
            </div>
          </div>
        </div>
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
      </div>
    </>
  );
};

export default App;
