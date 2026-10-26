import "./ArtCard.css";

const ArtCard = ({ image, title, artist }) => {
  return (
    <div className="art-img">
      <img src={image} alt={title} />
      <p>&#9733; {title} by: {artist}</p>
    </div>
  );
};

export default ArtCard;