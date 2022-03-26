import React, { createContext, useState } from "react";

export let DataContext = createContext();

function ContextProvider({ children }) {
  let [data, setData] = useState(null);
  let [totalCount, setTotalCount] = useState(0);
  let [parts, setParts] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  return (
    <DataContext.Provider
      value={{
        data,
        parts,
        setData,
        setParts,
        loading,
        setLoading,
        error,
        setError,
        totalCount,
        setTotalCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default ContextProvider;
