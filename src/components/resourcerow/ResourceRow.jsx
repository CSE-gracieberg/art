import "./ResourceRow.css";
import playIcon from "../../images/play-arrow.png";
import shopIcon from "../../images/shop.png";

const ResourceRow = ({ resource }) => {

  
  const base = process.env.PUBLIC_URL || "";
  const icon = resource.category === "video" ? playIcon : shopIcon;

  return (
    <tr>
      <td>
        <img
          className="resource-logo"
          src={`${base}/${resource.img_name}`}
          alt={resource.name}
        />
      </td>
      <td>{resource.name}</td>
      <td>{resource.description}</td>
      <td>{resource.skill_level}</td>
      <td>
        <a href={resource.link} target="_blank" rel="noreferrer">
          <img
            className="resource-icon"
            src={`${base}/images/${icon}`}
            alt={`Visit ${resource.name}`}
          />
        </a>
      </td>
    </tr>
  );
};

export default ResourceRow;