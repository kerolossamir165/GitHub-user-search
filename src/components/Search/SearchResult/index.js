import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../../../context/contextProvider";

function SearchResult() {
  let { data, loading, error, totalCount } = useContext(DataContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <svg
          role="status"
          className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }
  if (data) {
    return (
      <div className="w-[1140px] m-auto px-2">
        <h1 className="text-3xl mb-5">Total Count Result : {totalCount}</h1>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
          {data &&
            data.map((el) => {
              return (
                <Link to={`/${el.login}`} key={el.id}>
                  <div className="overflow-hidden shadow-lg rounded-lg relative mb-1 mb-6 w-64 h-64 m-auto">
                    <img
                      alt="eggs"
                      src={el.avatar_url}
                      className="rounded-lg"
                    />
                    <div className="absolute bg-gradient-to-b bg-opacity-60 from-transparent to-black w-full p-4 bottom-0">
                      <p className="text-white text-2xl nb-4">{el.login}</p>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-300 flex items-center">
                          <svg
                            width="10"
                            height="10"
                            fill="currentColor"
                            className="h-4 w-4"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                          </svg>
                          {el.login}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-lg text-center">{error && <div>{error}</div>}</div>
    );
  }
  return null;
}

export default SearchResult;
