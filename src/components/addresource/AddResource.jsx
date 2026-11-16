    import { useState, useEffect } from "react";
    import "./AddResource.css";
    import { API_URL } from "../../api";

    const SKILL_LEVELS = ["Beginner", "Intermediate", "Advanced", "All levels"];

    // Same limits as the Joi schema on the server
    const validate = (v) => {
    const errors = {};

    const name = v.name.trim();
    if (name.length < 3 || name.length > 60) {
        errors.name = "Name must be 3 to 60 characters.";
    }

    if (!["video", "shopping"].includes(v.category)) {
        errors.category = "Please choose Video or Shopping.";
    }

    const description = v.description.trim();
    if (description.length < 10 || description.length > 200) {
        errors.description = "Description must be 10 to 200 characters.";
    }

    if (!SKILL_LEVELS.includes(v.skill_level)) {
        errors.skill_level = "Please choose a skill level.";
    }

    try {
        const url = new URL(v.link.trim());
        if (!["http:", "https:"].includes(url.protocol)) throw new Error("bad");
    } catch (err) {
        errors.link = "Enter a full web address starting with https://";
    }

    return errors;
    };

    const AddResource = ({ closeDialog, onAdded }) => {
    const [values, setValues] = useState({
        name: "",
        category: "",
        description: "",
        skill_level: "",
        link: "",
    });
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [errors, setErrors] = useState({});
    const [result, setResult] = useState("");
    const [sending, setSending] = useState(false);

    // Escape closes the dialog
    useEffect(() => {
        const onKey = (e) => {
        if (e.key === "Escape") closeDialog();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [closeDialog]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({ ...prev, image: "Please choose an image file." }));
        return;
        }

        setErrors((prev) => ({ ...prev, image: undefined }));
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length > 0) {
        setResult("Please fix the highlighted fields.");
        return;
        }

        setSending(true);
        setResult("Sending...");

        const formData = new FormData();
        formData.append("name", values.name.trim());
        formData.append("category", values.category);
        formData.append("description", values.description.trim());
        formData.append("skill_level", values.skill_level);
        formData.append("link", values.link.trim());
        if (image) formData.append("img", image);

        try {
        const response = await fetch(`${API_URL}/api/resources`, {
            method: "POST",
            body: formData,
        });

        if (response.status === 200) {
            onAdded(await response.json());
        } else {
            setResult((await response.text()) || "Error adding resource.");
            setSending(false);
        }
        } catch (err) {
        setResult("Could not reach the server. Please try again.");
        setSending(false);
        }
    };

    return (
        <div className="add-backdrop" onClick={closeDialog}>
        <div
            className="add-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-title"
            onClick={(e) => e.stopPropagation()}
        >
            <button className="add-close" onClick={closeDialog} aria-label="Close">
            &times;
            </button>

            <h2 id="add-title">&#9733; Suggest a Resource &#9733;</h2>

            <form onSubmit={handleSubmit} noValidate>
            <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={values.name} onChange={handleChange} />
                {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="field-row">
                <div className="field">
                <label htmlFor="category">Type</label>
                <select id="category" name="category" value={values.category} onChange={handleChange}>
                    <option value="">Choose...</option>
                    <option value="video">Video</option>
                    <option value="shopping">Shopping</option>
                </select>
                {errors.category && <span className="field-error">{errors.category}</span>}
                </div>

                <div className="field">
                <label htmlFor="skill_level">Skill level</label>
                <select id="skill_level" name="skill_level" value={values.skill_level} onChange={handleChange}>
                    <option value="">Choose...</option>
                    {SKILL_LEVELS.map((level) => (
                    <option key={level} value={level}>{level}</option>
                    ))}
                </select>
                {errors.skill_level && <span className="field-error">{errors.skill_level}</span>}
                </div>
            </div>

            <div className="field">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows="3" value={values.description} onChange={handleChange} />
                {errors.description && <span className="field-error">{errors.description}</span>}
            </div>

            <div className="field">
                <label htmlFor="link">Website link</label>
                <input id="link" name="link" type="text" placeholder="https://" value={values.link} onChange={handleChange} />
                {errors.link && <span className="field-error">{errors.link}</span>}
            </div>

            <div className="field image-field">
                {preview && <img className="add-preview" src={preview} alt="Logo preview" />}
                <div>
                <label htmlFor="img">Logo (optional)</label>
                <input id="img" name="img" type="file" accept="image/*" onChange={handleImage} />
                {errors.image && <span className="field-error">{errors.image}</span>}
                </div>
            </div>

            <button className="add-submit" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Submit"}
            </button>

            <p className="add-result" aria-live="polite">{result}</p>
            </form>
        </div>
        </div>
    );
};

export default AddResource;