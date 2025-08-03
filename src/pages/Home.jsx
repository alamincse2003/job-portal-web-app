import { useState } from "react";
import JobCard from "../components/JobCard";
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "XYZ",
    location: "Remote",
    isRemote: true,
  },
  {
    id: 2,
    title: "React Developer",
    company: "ZYX",
    location: "On Site",
    isRemote: false,
  },
  {
    id: 3,
    title: "Fullstack Developer",
    company: "YZX",
    location: "Remote",
    isRemote: true,
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "YXZ",
    location: "Remote",
    isRemote: false,
  },
];
const Home = () => {
  const [showRemoteOnly, setShowRemoteOnly] = useState(false);

  const filteredJobs = showRemoteOnly
    ? jobs.filter((job) => job.isRemote)
    : jobs;

  return (
    <div className="p-4 space-y-4">
      <button
        onClick={() => setShowRemoteOnly((prev) => !prev)}
        className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
      >
        {showRemoteOnly ? "Show Only Remote Jobs" : "Show All Jobs"}
      </button>
      {filteredJobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default Home;
