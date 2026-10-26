import "./Tutorials.css";
import { Link } from "react-router-dom";
import PageTitle from "../../components/pagetitle/PageTitle";
import TutorialSection from "../../components/tutorialsection/TutorialSection";
import SplitBar from "../../components/splitbar/Splitbar";

// Later this array will come from your JSON file
const sections = [
  {
    title: "Painting Tutorials",
    tutorials: [
      { level: 1, description: "Learning about the different kinds of paints!" },
      { level: 2, description: "Baby Steps: Putting paint on your canvas!" },
      { level: 3, description: "Learn about Shading, linework, and brush control!" },
      { level: 4, description: "Putting it all together to create your first piece!" },
    ],
  },
  {
    title: "Anatomy Tutorials",
    tutorials: [
      { level: 1, description: "Learning about proportions to draw faces!" },
      { level: 2, description: "Learning the steps to draw a female body!" },
      { level: 3, description: "Learning the steps to draw a male body!" },
      { level: 4, description: "Putting it all together!" },
    ],
  },
  {
    title: "Intro to Color Theory",
    tutorials: [
      { level: 1, description: "Learning about the different color types!" },
      { level: 2, description: "Learn about hues, values and saturations" },
      { level: 3, description: "Learning how to use colors together!" },
      { level: 4, description: "Introducing color Psychology!" },
    ],
  },
  {
    title: "Landscape Tutorials",
    tutorials: [
      { level: 1, description: "Learning value and perspective for landscapes!" },
      { level: 2, description: "Learning how to simplify natural elements!" },
      { level: 3, description: "Learn about how to set up your landscape art!" },
      { level: 4, description: "Putting all our methods together to make a final piece!" },
    ],
  },
];

const Tutorials = () => {
  return (
    <div id="tutorials">
      <PageTitle
        title="TUTORIALS"
        subtitle="Learn how to paint, draw, color, and more right here! You don't have to follow these in any order! Take it at your own pace ★"
      />

      {sections.map((section, index) => (
        <div key={section.title}>
          <TutorialSection title={section.title} tutorials={section.tutorials} />
          {index < sections.length - 1 && <SplitBar />}
        </div>
      ))}

      <SplitBar />

      <div id="other-source">
        <Link to="/resources">
          <h2>Can't find what you're looking for? Check out more resources here!</h2>
          <p>&gt;&gt;</p>
        </Link>
      </div>
    </div>
  );
};

export default Tutorials;