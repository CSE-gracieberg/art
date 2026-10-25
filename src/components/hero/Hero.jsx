import "./Hero.css";
import Slideshow from "../slideshow/Slideshow";
import Welcome from "../hero/Welcome";

const Hero = () => {
    return (
        <section id="hero">\
            <Welcome />
            <Slideshow />
        </section>
    );
};

export default Hero;