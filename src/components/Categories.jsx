import { useEffect, useState } from "react";
import api from "../services/api";
import { Briefcase, Home, Clock, GraduationCap } from "lucide-react";

const iconMap = {
  home: <Home className="w-10 h-10 text-indigo-500" />,
  briefcase: <Briefcase className="w-10 h-10 text-green-500" />,
  clock: <Clock className="w-10 h-10 text-blue-500" />,
  graduationCap: <GraduationCap className="w-10 h-10 text-yellow-500" />,
};

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-16 bg-gray-50 mt-10 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Job Categories
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Explore thousands of job opportunities with all the information you
          need. Find your dream job today.
        </p>

        {/* Categories Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center">{iconMap[cat.icon]}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {cat.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
