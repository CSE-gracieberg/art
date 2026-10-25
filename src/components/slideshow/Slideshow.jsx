import { useState } from "react";
import SpotlightSlide from "./SpotlightSlide";
import "./Slideshow.css";
import scene from "../hero/images/scene.png";
import reimagined from "../hero/images/reimagined.jpeg";
import dragons from "../hero/images/feildsanddragons.jpeg";

// This array is what we'll later replace with data from your JSON file
const slides = [
  { image: scene, alt: "the scene", caption: "The Scene by: Gracie Bergmann" },
  { image: reimagined, alt: "Reimagine", caption: "Reimagined by: Gracie Bergmann" },
  { image: dragons, alt: "feilds and dragons", caption: "Fields and Dragons by: Gracie Bergmann" },
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div id="spotlight-slide" className="slideshow-wrapper">
      <div className="slideshow-container">
        <div className="star-clip">
          {slides.map((slide, index) => (
            <SpotlightSlide
              key={index}
              image={slide.image}
              alt={slide.alt}
              active={index === current}
            />
          ))}
        </div>
        <button className="prev" onClick={prev}>&#10094;</button>
        <button className="next" onClick={next}>&#10095;</button>
      </div>

      <div id="sptlt-captn" className="spotlight-caption">
        <h3>Artist Spotlight</h3>
        <p>{slides[current].caption}</p>
      </div>
    </div>
  );
};

export default Slideshow;