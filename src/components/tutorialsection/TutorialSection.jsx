import "./TutorialSection.css";
import TutorialCard from "../tutorialcard/TutorialCard";

const TutorialSection = ({ title, tutorials }) => {
  return (
    <div className="tut-section">
      <h1>{title}</h1>
      <div className="tut-row">
        {tutorials.map((tut) => (
          <TutorialCard key={tut.level} level={tut.level} description={tut.description} />
        ))}
      </div>
    </div>
  );
};

export default TutorialSection;