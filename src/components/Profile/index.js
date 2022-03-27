import React, { useEffect, useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import api from "../../Api/api";
import Spinner from "../Spinner";

let getUser = async (pathname) => {
  let user = await api.get("/users" + pathname);
  return { user: user.data };
};

let Profile = () => {
  let { pathname } = useLocation();
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    getUser(pathname)
      .then((res) => {
        setData(res.user);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message + " sorry For That");
        setLoading(false);
        throw new Error(err);
      });
  }, [pathname]);

  let history = useHistory();

  const goToPreviousPath = () => {
    history.goBack();
  };

  return (
    <>
      {loading && <Spinner />}
      {error && <div className="text-lg text-center">{error}</div>}

      {data && (
        <div className=" flex justify-center items-center pt-56">
          <div className="w-[600px] m-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link
              to=""
              className="flex items-center justify-start px-4 pt-4  text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              onClick={goToPreviousPath}
            >
              <svg
                height="32px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
                width="32px"
              >
                <path d="M327.3,98.9l-2.1,1.8l-156.5,136c-5.3,4.6-8.6,11.5-8.6,19.2c0,7.7,3.4,14.6,8.6,19.2L324.9,411l2.6,2.3  c2.5,1.7,5.5,2.7,8.7,2.7c8.7,0,15.8-7.4,15.8-16.6h0V112.6h0c0-9.2-7.1-16.6-15.8-16.6C332.9,96,329.8,97.1,327.3,98.9z" />
              </svg>
              <span>Go Back</span>
            </Link>

            <div className="flex flex-col items-center pb-10">
              <img
                className="mb-3 w-24 h-24 rounded-full shadow-lg"
                src={data.avatar_url}
                alt={`${data.name}`}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {data.login}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {data.bio}
              </span>
              <div className="text-sm flex justify-between gap-6 text-gray-500 dark:text-gray-400">
                <div>Followers : {data.followers}</div>

                <div>Following :{data.following}</div>
              </div>
              <div className="flex mt-4 space-x-3 lg:mt-6">
                <a
                  href="https://github.com/linkkingjay"
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Page
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
