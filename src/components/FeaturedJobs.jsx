import api from "../services/api";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    api
      .get("/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="my-6 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Jobs</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.slice(0, 4).map((job) => (
          <div
            key={job.id}
            className="border rounded-xl p-6 shadow hover:shadow-lg bg-white dark:bg-gray-800 transition"
          >
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {job.company} • {job.location}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {job.category} • {job.type} • {job.postedAt}
            </p>
            <p className="text-sm text-green-600 font-medium mt-2">
              {job.salary}
            </p>
            <Link
              to={`/jobs/${job.id}`}
              className="text-blue-600 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/jobs"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          See All Jobs
        </Link>
      </div>
    </section>
  );
};

export default FeaturedJobs;
