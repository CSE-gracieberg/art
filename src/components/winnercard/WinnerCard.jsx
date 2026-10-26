import "./WinnerCard.css";

const WinnerCard = ({ heading, image, alt }) => {
  return (
    <div className="winner-card">
      <h4>{heading}</h4>
      <img src={image} alt={alt} />
    </div>
  );
};

export default WinnerCard;