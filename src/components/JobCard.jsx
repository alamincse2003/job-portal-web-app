const JobCard = ({ title, company, location, isRemote }) => {
  return (
    <div className="border p-4 rounded shadow bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">{company}</p>
      <p className="text-sm text-gray-500">{location}</p>
      {isRemote && (
        <span className="text-green-600 text-xs">Remote Available</span>
      )}
    </div>
  );
};

export default JobCard;
