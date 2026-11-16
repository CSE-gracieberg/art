import { useState, useEffect } from "react";
import "./Resources.css";
import PageTitle from "../../components/pagetitle/PageTitle";
import ResourceTable from "../../components/resourcetable/ResourceTable";
import ResourceDialog from "../../components/resourcedialog/ResourceDialog";
import AddResource from "../../components/addresource/AddResource";
import { API_URL } from "../../api";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const getResources = async () => {
      for (let attempt = 0; attempt < 4; attempt++) {
        try {
          const response = await fetch(`${API_URL}/api/resources`);
          const type = response.headers.get("content-type") || "";

          if (response.ok && type.includes("application/json")) {
            setResources(await response.json());
            setLoading(false);
            return;
          }
        } catch (err) {
          console.log("Server not ready yet:", err);
        }
        // wait 8 seconds then try again
        await new Promise((resolve) => setTimeout(resolve, 8000));
      }

      setError(true);
      setLoading(false);
    };

    getResources();
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 5000);
    return () => clearTimeout(timer);
  }, [notice]);

  const addResource = (newResource) => {
    setResources((previous) => [...previous, newResource]);
    setNotice(`${newResource.name} was added! Thank you ★`);
    setShowAdd(false);
  };

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
          <p className="resources-message">Click any row for more details &#9733;</p>

          <div className="add-bar">
            <button className="add-open" onClick={() => setShowAdd(true)}>
              + Suggest a Resource
            </button>
          </div>

          {notice && (
            <p className="add-notice" role="status">
              {notice}
            </p>
          )}

          <ResourceTable
            title="VIDEOS"
            nameLabel="Channel"
            detailLabel="Type of Content"
            resources={videos}
            onSelect={setSelected}
          />

          <ResourceTable
            title="SHOPPING"
            nameLabel="Store"
            detailLabel="Material"
            resources={shopping}
            onSelect={setSelected}
          />
        </>
      )}

      {selected && (
        <ResourceDialog
          resource={selected}
          closeDialog={() => setSelected(null)}
        />
      )}

      {showAdd && (
        <AddResource
          closeDialog={() => setShowAdd(false)}
          onAdded={addResource}
        />
      )}
    </div>
  );
};

export default Resources;