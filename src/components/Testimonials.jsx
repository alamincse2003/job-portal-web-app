import { useEffect, useState } from "react";
import api from "../services/api";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    api
      .get("/testimonials")
      .then((res) => {
        setTestimonials(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((tes) => (
            <div
              key={tes.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
            >
              <img
                src={tes.image}
                alt={tes.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                “{tes.review}”
              </p>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {tes.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {tes.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
