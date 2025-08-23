import { Link } from "react-router-dom";
import jobSearch from "../assets/job-search-picture.jpg";
const Hero = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-20 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Find Your{" "}
            <span className="text-blue-500 dark:text-blue-400">Dream Job</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Browse thousands of jobs from top companies. Apply with just one
            click and build your career.
          </p>
          <Link
            to="/jobs"
            className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
          >
            Explore Jobs
          </Link>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={jobSearch}
            alt="Job Search"
            className="w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
