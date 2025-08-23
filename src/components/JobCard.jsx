import { useEffect, useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";
import { getBookmarks, toggleBookmark } from "../utils/bookmark";

const JobCard = ({ job, isBookmarked }) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = getBookmarks();
    const exists = bookmarks.find((j) => j.id === job.id);
    if (exists) setBookmarked(true);
  }, [job.id]);

  // Bookmark
  const handleBookmark = () => {
    toggleBookmark(job);
    setBookmarked(!bookmarked);
  };
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
        <Link to={`/jobs/${job.id}`} className="text-blue-600 hover:underline">
          View Details
        </Link>
      </div>

      <div className="flex items-start md:items-center gap-3">
        {/* <button
          onClick={() => onApply(job)}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Apply
        </button> */}

        <button
          onClick={handleBookmark}
          className={`px-3 py-3 rounded ${
            bookmarked ? "bg-yellow-400" : "bg-gray-200"
          }`}
          aria-label="bookmark"
        >
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
