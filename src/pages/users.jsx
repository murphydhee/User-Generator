import React, { useState, useMemo } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import NavBar from "../components/navBar";

const pages = 5;

const Users = () => {
  const [page, setPage] = useState(1);
  const { loading, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=1&seed=abc`
  );

  const Loading = () => {
    if (loading) {
      return (
        <div className="flex duration-300 delay-300 items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
        </div>
      );
    }
  };

  return (
    <div className="bg-gray-500 w-full h-[100vh] ">
      <NavBar />
      <h2 className="flex text-center pt-[100px] justify-center p-[20px] text-[32px] rounded-lg dark:text-gray-50">
        User
      </h2>
      <Loading />
      {data?.results.map((each) => {
        const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
        return (
          <div
            key={each.login.uuid}
            className="flex justify-center items-center mb-[80px]"
          >
            <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className=" flex-col pb-10 mt-[20px] flex justify-center items-center">
                <img
                  className="mb-3 w-24 h-24 m-3 rounded-full shadow-lg"
                  src={each.picture.large}
                  alt="user imgs"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {each.email}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <Link
                    to="/moreInfo"
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <p className="flex justify-center items-center">
        Pages: {page} of {pages}
      </p>
      <div className="flex justify-center items-center">
        <button
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>

        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (each) => (
            <button
              onClick={() => setPage(each)}
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {each}
            </button>
          )
        )}
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {" "}
          Prev
        </button>
      </div>
    </div>
  );
};

export default Users;
