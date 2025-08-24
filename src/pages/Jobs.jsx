import { useEffect, useMemo, useState } from "react";
import api from "../services/api";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 4;

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filters
  const [query, setQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);

  // pages
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    api
      .get("/jobs")
      .then((res) => {
        if (!mounted) return;
        setJobs(res.data);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load jobs");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // filtering logic
  const filtered = useMemo(() => {
    let list = jobs;

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          (j.category && j.category.toLowerCase().includes(q))
      );
    }

    if (locationFilter.trim()) {
      list = list.filter((j) =>
        j.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (typeFilter) {
      list = list.filter((j) => j.type === typeFilter);
    }

    if (remoteOnly) {
      list = list.filter((j) => j.isRemote);
    }

    return list;
  }, [jobs, query, locationFilter, typeFilter, remoteOnly]);

  // pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // dropdown options
  const locations = Array.from(new Set(jobs.map((j) => j.location)));
  const types = Array.from(new Set(jobs.map((j) => j.type)));

  // (bookmark/apply handlers can be added later)
  const handleToggleBookmark = (id) => {
    // placeholder — implement POST/DELETE to /bookmarks later
    console.log("toggle bookmark", id);
  };

  // const handleApply = (job) => {
  //   alert("Apply clicked for: " + job.title);
  // };

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">All Jobs</h1>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search by title, company, category..."
          className="col-span-2 p-2 border rounded bg-white dark:bg-gray-700"
        />
        <input
          value={locationFilter}
          onChange={(e) => {
            setLocationFilter(e.target.value);
            setPage(1);
          }}
          placeholder="Location"
          className="p-2 border rounded bg-white dark:bg-gray-700"
        />
        <select
          value={typeFilter}
          onChange={(e) => {
            setTypeFilter(e.target.value);
            setPage(1);
          }}
          className="p-2 border rounded bg-white dark:bg-gray-700"
        >
          <option value="">All Types</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="dark:bg-gray-700 p-2 border rounded bg-white"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <div className="md:col-span-4 flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={remoteOnly}
              onChange={(e) => {
                setRemoteOnly(e.target.checked);
                setPage(1);
              }}
            />
            <span className="text-sm">Remote only</span>
          </label>
        </div>
      </div>

      {/* Loading / Error */}
      {loading && <p className="text-center text-gray-500">Loading jobs...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Results */}
      {!loading && !error && (
        <>
          <div className="space-y-3">
            {paginated.length === 0 ? (
              <p className="text-center text-gray-500">No jobs found.</p>
            ) : (
              paginated.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isBookmarked={false}
                  onToggleBookmark={handleToggleBookmark}
                  // onApply={handleApply}
                />
              ))
            )}
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Jobs;
