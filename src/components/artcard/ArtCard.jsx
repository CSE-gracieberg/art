import "./ArtCard.css";

const ArtCard = ({ image, title, artist, onClick }) => {
  return (
    <div className="art-img">
      <img
        src={image}
        alt={title}
        onClick={onClick}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
      />
      <p>&#9733; {title} by: {artist}</p>
    </div>
  );
};

export default ArtCard;