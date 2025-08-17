import { useEffect, useState } from "react";
import { useParams } from "react-router"
import api from "../services/api";

 const JobsDetails = () => {
    const {id} = useParams();
    const [job,setJob] = useState(null);
     
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await api.get(`/jobs/${id}`)
                setJob(res.data);
            } catch (error) {
                console.error("Error Fetching Job Details",error);
            }
        };
        fetchJob();
    },[id]);
      if (!job) return <p className="text-center mt-10">Loading...</p>;
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
        <p className="text-gray-700 dark:text-gray-300 mt-2">{job.description}</p>
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  )
}

export default JobsDetails
