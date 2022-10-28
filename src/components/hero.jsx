import React from "react";
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <section className="h-screen pt-[80px] dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          A Random User Generator With Over 5000+ User
          <span className="dark:text-violet-400"></span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Validated by Random User Generator API
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            <Link to="/users">Get Started</Link>
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
            <a href="https://randomuser.me/" target="_blank">
              Learn more
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default hero;
