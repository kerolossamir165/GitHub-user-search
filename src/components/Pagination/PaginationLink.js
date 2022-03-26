import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getSearchQuery } from "../../utils/getSearchQuery";
import qs from "query-string";
import { DataContext } from "../../context/contextProvider";

import api from "../../Api/api";
import parser from "../../utils/parseLink";

function PaginationLink({ url, rel, text, restdata }) {
  let { setData, setParts } = useContext(DataContext);
  
  if (!url) {
    return null;
  }
  const search = getSearchQuery(url);

  let handelClick = async () => {
    let res = await api.get("/search/users", {
      params: {
        ...qs.parse(search),
      },
    });

    let parts = await parser(res);
    setData(res.data.items);
    setParts(parts);
  };

  return (
    <Link
      to={{
        search,
      }}
      rel={rel}
      onClick={handelClick}
      className="bg-slate-900 text-white  pr-5 pl-5 pt-3 pb-3 rounded-md"
    >
      <span>{text}</span>
    </Link>
  );
}

export default PaginationLink;
