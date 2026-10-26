import "./Community.css";
import PageTitle from "../../components/pagetitle/PageTitle";
import ArtCard from "../../components/artcard/ArtCard";
import reimagined from "../../images/reimagined.jpeg";
import dragons from "../../images/feildsanddragons.jpeg";
import pinkman from "../../images/pinkman.png";
import scene from "../../images/scene.png";
import willow from "../../images/willow.png";
import trainer from "../../images/trainer.png";

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
  return (
    <div id="community">
      <PageTitle
        title="COMMUNITY"
        subtitle="Check out art from other artists like you! Artwork is submitted through contests or the google form!"
      />

      <div id="uploaded-imgs">
        {artworks.map((art, index) => (
          <ArtCard key={index} image={art.image} title={art.title} artist={art.artist} />
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