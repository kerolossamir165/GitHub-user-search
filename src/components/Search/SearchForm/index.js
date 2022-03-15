import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../Api/api";
import parser from "../../../utils/parseLink";

import { DataContext } from "../../../context/contextProvider";

let PER_PAGE = 20;

export let getData = async function (val, page) {
  return await api.get("/search/users", {
    params: {
      per_page: PER_PAGE,
      q: val,
      page: page,
    },
  });
};

function SearchForm() {
  let { setData, setParts, setLoading, setError } = useContext(DataContext);

  let history = useHistory();

  let handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setData(null);
      let query = e.target.elements.search.value;
      history.push({
        pathname: "/search",
        search: `per_page=${PER_PAGE}&q=${query}&page=1`,
      });

      let res = await getData(query, 1);
      let parts = parser(res);
      setData(res.data.items);
      setParts(parts);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setData(null);
      setLoading(false);
    }
  };

  return (
    <div className="rounded-md shadow-md pr-5 pl-5">
      <div className="w-[1140px] m-auto px-2">
        <form
          action=""
          onSubmit={handelSubmit}
          className="pt-4 mb-4 flex justify-between items-center"
        >
          <div className="flex-shrink-0 mb-2">
            <a href="https://github.com" className="block relative">
              <img
                src="/img/GitHub-Mark-64px.png"
                alt="github logo"
                className="mx-auto object-cover rounded-full h-16 w-16 "
              />
            </a>
          </div>
          <div className="flex relative w-[500px] h-10 mb-5">
            <input
              type="text"
              name="search"
              className=" rounded-l-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none  "
              placeholder="Search a user : Simon"
            />
            <button
              type="submit"
              aria-label="submit"
              className="rounded-r-md inline-flex  items-center px-3 border-t bg-white border-r border-b  border-gray-300 text-gray-500 shadow-sm text-sm"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="20px"
                height="20px"
              >
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
