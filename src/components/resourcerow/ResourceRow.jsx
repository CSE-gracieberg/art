import "./ResourceRow.css";

const ResourceRow = ({ resource }) => {
  const base = process.env.PUBLIC_URL || "";
  const icon = resource.category === "video" ? "play-arrow.png" : "shop.png";

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