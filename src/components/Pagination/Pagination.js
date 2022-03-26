import React, { useContext } from "react";
import PaginationLink from "./PaginationLink";

import { DataContext } from "../../context/contextProvider";

let NextOrPrev = ({ url, rel, text }) => {
  return <PaginationLink url={url} rel={rel} text={text} />;
};

function Pagination() {
  let { parts, loading } = useContext(DataContext);

  return (
    <>
      {!loading && (
        <div className="flex justify-between  h-6 m-5">
          <div>
            {parts.prev && (
              <NextOrPrev url={parts.prev} rel="prev" text="Prev" />
            )}
          </div>
          <div>
            {parts.next && (
              <NextOrPrev url={parts.next} rel="next" text="Next" />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Pagination;
