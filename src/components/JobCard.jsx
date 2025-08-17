import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const JobCard = ({ job, isBookmarked, onToggleBookmark, onApply }) => {
  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm flex flex-col md:flex-row justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {job.company} • {job.location}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {job.category} • {job.type} • {job.postedAt}
        </p>
        <p className="text-sm text-green-600 font-medium mt-2">{job.salary}</p>
      </div>

      <div className="flex items-start md:items-center gap-3">
        <button
          onClick={() => onApply(job)}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Apply
        </button>

        <button
          onClick={() => onToggleBookmark(job.id)}
          className="text-xl text-yellow-500"
          aria-label="bookmark"
        >
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
