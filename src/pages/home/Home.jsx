import Hero from "../../components/hero/Hero";
import SplitBar from "../../components/splitbar/Splitbar";
import Quote from "../../components/quote/Quote";
import About from "../../components/about/About";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <SplitBar />
      <div id="btm-half" className="columns">
        <Quote />
        <About />
      </div>
    </div>
  );
};

export default Home;