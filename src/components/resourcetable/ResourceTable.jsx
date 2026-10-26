import "./ResourceTable.css";
import ResourceRow from "../resourcerow/ResourceRow";

const ResourceTable = ({ title, nameLabel, detailLabel, resources }) => {
  return (
    <div className="resource-section">
      <h1>{title}</h1>
      <div className="table-scroll">
        <table className="table-colors">
          <thead>
            <tr>
              <th>&#9733; Image &#9733;</th>
              <th>&#9733; {nameLabel} &#9733;</th>
              <th>&#9733; {detailLabel} &#9733;</th>
              <th>&#9733; Skill Level &#9733;</th>
              <th>&#9733; Link &#9733;</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <ResourceRow key={resource._id} resource={resource} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourceTable;