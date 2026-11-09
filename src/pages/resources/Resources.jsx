import { useState, useEffect } from "react";
import "./Resources.css";
import PageTitle from "../../components/pagetitle/PageTitle";
import ResourceTable from "../../components/resourcetable/ResourceTable";
import { API_URL } from "../../api";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getResources = async () => {
      try {
        const response = await fetch(`${API_URL}/api/resources`);
        const data = await response.json();
        setResources(data);
      } catch (err) {
        console.log("Error loading resources:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getResources();
  }, []);

  const videos = resources.filter((r) => r.category === "video");
  const shopping = resources.filter((r) => r.category === "shopping");

  return (
    <div id="resources">
      <PageTitle
        title="HELPFUL RESOURCES"
        subtitle="Hadn't found what you're looking for? Here you can find links to other tutorials, helpful materials, and websites that may have what you need!"
      />

      {loading && (
        <p className="resources-message">
          &#9733; Loading resources... this can take up to a minute while the server wakes up &#9733;
        </p>
      )}

      {error && (
        <p className="resources-message">
          Sorry, the resources could not be loaded. Please try again later.
        </p>
      )}

      {!loading && !error && (
        <>
          <ResourceTable
            title="VIDEOS"
            nameLabel="Channel"
            detailLabel="Type of Content"
            resources={videos}
          />

          <ResourceTable
            title="SHOPPING"
            nameLabel="Store"
            detailLabel="Material"
            resources={shopping}
          />
        </>
      )}
    </div>
  );
};

export default Resources;