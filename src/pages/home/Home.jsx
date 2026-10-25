import Hero from "../../components/hero/Hero";
import SplitBar from "../../components/splitbar/Splitbar";
import About from "../../components/about/About";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <SplitBar />
      <About />
    </div>
  );
};

export default Home;