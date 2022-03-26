import React, { useEffect, useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import api from "../../Api/api";

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
      {loading && (
        <div className="flex justify-center items-center w-full pt-56">
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
      )}
      {error && <div>{error}</div>}

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
