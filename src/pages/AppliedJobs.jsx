import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import api from "../services/api";

const AppliedJobs = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
          setApplications([]);
          setLoading(false);
          return;
        }

        const res = await api.get("/applications");
        //  current user of application show
        const userApps = res.data.filter((app) => app.userId === user.uid);

        setApplications(userApps);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Applied Jobs</h2>

      {applications.length === 0 ? (
        <p className="text-gray-500">You haven’t applied to any jobs yet.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{app.title}</h3>
              <p className="text-gray-600">{app.company}</p>
              <p className="text-gray-500 text-sm">{app.location}</p>
              <p className="text-gray-400 text-xs mt-2">
                Applied on: {new Date(app.appliedAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
