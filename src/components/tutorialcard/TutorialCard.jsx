import "./TutorialCard.css";

const TutorialCard = ({ level, description }) => {
  return (
    <div className={`tut-card level${level}`}>
      <h3>LEVEL {level}</h3>
      <p className="txt-star">{"★".repeat(level)}</p>
      <p>{description}</p>
    </div>
  );
};

export default TutorialCard;