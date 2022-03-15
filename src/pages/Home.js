import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "../components/Pagination/Pagination";
import SearchForm from "../components/Search/SearchForm";
import SearchResult from "../components/Search/SearchResult";

function Home() {
  let history = useHistory();
  useEffect(() => {
    if (performance.navigation.type === 1) {
      console.log("This page is reloaded");

      history.push("/search");
    }
  }, [history]);
  return (
    <div>
      <SearchForm />
      <SearchResult />
      <Pagination />
    </div>
  );
}

export default Home;
