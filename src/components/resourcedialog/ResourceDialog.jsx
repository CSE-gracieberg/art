import { useEffect } from "react";
import "./ResourceDialog.css";
import { API_URL } from "../../api";

const ResourceDialog = ({ resource, closeDialog }) => {
    useEffect(() => {
    const onKey = (e) => {
        if (e.key === "Escape") closeDialog();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
}, [closeDialog]);

return (
    <div className="dialog-backdrop" onClick={closeDialog}>
    <div
        className="dialog-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        onClick={(e) => e.stopPropagation()}
        >
        <button className="dialog-close" onClick={closeDialog} aria-label="Close">
            &times;
        </button>

        <img
            className="dialog-logo"
            src={`${API_URL}/${resource.img_name}`}
            alt={resource.name}
        />

        <h2 id="dialog-title">{resource.name}</h2>

        <p className="dialog-tags">
            <span>{resource.category === "video" ? "Video" : "Shopping"}</span>
            <span>{resource.skill_level}</span>
        </p>

        <p className="dialog-description">{resource.description}</p>

        <a
            className="dialog-visit"
            href={resource.link}
            target="_blank"
            rel="noreferrer"
        >
        &#9733; Visit {resource.name} &#9733;
        </a>
    </div>
    </div>
);
};

export default ResourceDialog;