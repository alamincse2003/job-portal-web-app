import Categories from "../components/Categories";
import FeaturedJobs from "../components/FeaturedJobs";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <Categories />
      <Testimonials />
    </>
  );
};

export default Home;
