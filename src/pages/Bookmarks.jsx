import { useEffect, useState } from "react";
import { getBookmarks } from "../utils/bookmark";
import JobCard from "../components/JobCard";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Bookmarked Jobs</h2>

      {bookmarks.length === 0 ? (
        <p className="text-gray-600">No bookmarked jobs yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {bookmarks.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
