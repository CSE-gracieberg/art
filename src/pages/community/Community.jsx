import "./Community.css";
import PageTitle from "../../components/pagetitle/PageTitle";
import ArtCard from "../../components/artcard/ArtCard";
import reimagined from "../../images/reimagined.jpeg";
import dragons from "../../images/feildsanddragons.jpeg";
import pinkman from "../../images/pinkman.png";
import scene from "../../images/scene.png";
import willow from "../../images/willow.png";
import trainer from "../../images/trainer.png";
//new
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//  this array will come from JSON file eventually (i dont have time)
const artworks = [
  { image: reimagined, title: "Reimagined", artist: "Gracie Bergmann" },
  { image: dragons, title: "Fields and Dragons", artist: "Gracie Bergmann" },
  { image: pinkman, title: "Pinkman", artist: "Gracie Bergmann" },
  { image: scene, title: "The Scene", artist: "Gracie Bergmann" },
  { image: willow, title: "Willow", artist: "Gracie Bergmann" },
  { image: trainer, title: "Trainer", artist: "Gracie Bergmann" },
];

const Community = () => {
  const [index, setIndex] = useState(-1);
  return (
    <div id="community">
      <PageTitle
        title="COMMUNITY"
        subtitle="Check out art from other artists like you! Artwork is submitted through contests or the google form!"
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={artworks.map((art) => ({ src: art.image, alt: art.title }))}
      />
      <div id="uploaded-imgs">
        {artworks.map((art, i) => (
          <ArtCard
            key={i}
            image={art.image}
            title={art.title}
            artist={art.artist}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <div id="submission-link">
        <h2>
          <a href="https://forms.gle/6yZogavGSz7TY4SG8">
            Submit a response on the google form to submit!
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Community;