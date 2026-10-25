import "./Hero.css";
import scene from "./images/TheScene.png";
import willow from "./images/willow.png"
const Hero = () => {
    return (
        <section id="hero">
            <img src={scene} alt="2000s scene character"/>
            <img src={willow} alt="Willow Fanart The Owl House"/>

        </section>
    )
};

export default Hero;