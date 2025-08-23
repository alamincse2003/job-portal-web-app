import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

const JobsDetails = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
  });
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get(`/jobs/${id}`);
        setJob(res.data);
      } catch (error) {
        console.error("Error Fetching Job Details", error);
      }
    };
    fetchJob();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Application Submitted:", formData);
  //   alert("Application submitted successfully!");
  //   setShowForm(false);
  //   setFormData({ name: "", email: "", resume: "", coverLetter: "" });
  // };

  const handleApply = async (e) => {
    e.preventDefault();
    if (!user) {
      return navigate("/login", { state: { from: location } });
    }
    try {
      await api.post("/applications", {
        userId: user.uid,
        jobId: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        appliedAt: new Date().toISOString(),
        ...formData,
      });
      alert(" Application submitted successfully!");
    } catch (error) {
      console.error("Error applying job:", error);
    }
  };

  if (!job) return <p className="text-center text-red-600 mt-10">Loading...</p>;
  return (
    <div className="max-w-3xl mx-auto mt-10 mb-10 p-3 shadow-md border rounded  bg-white dark:bg-gray-800 ">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        {job.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{job.company}</p>
      <p className="text-gray-500 dark:text-gray-400">{job.location}</p>

      <div className="mt-4">
        <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
          Job Description
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {job.description}
        </p>
      </div>
      {/* Apply Button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Apply Now
        </button>
      )}

      {/* Apply Form */}
      {showForm && (
        <form
          onSubmit={handleApply}
          className="mt-6 space-y-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Resume Link
            </label>
            <input
              type="url"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              placeholder="https://yourresume.com"
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          <div className="flex space-x-3">
            {/* <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit Application
            </button> */}
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Submit Application
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default JobsDetails;
