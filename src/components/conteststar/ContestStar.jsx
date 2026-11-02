import { useState } from "react";
import Select from "react-select";
import "./ContestStar.css";

const ACCESS_KEY = "6daaeb9b-0f60-475c-b92f-04ae762e4eab";

const topics = [
  { value: "Contest entry", label: "Contest entry" },
  { value: "Question", label: "Question" },
  { value: "Feedback", label: "Feedback" },
  { value: "Other", label: "Other" },
];

// menuPortal keeps the dropdown from being cut off by the star shape
const selectStyles = {
  control: (base) => ({ ...base, minHeight: 28, fontSize: 14 }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};

const ContestStar = () => {
  const [topic, setTopic] = useState(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");

    const values = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...values,
          access_key: ACCESS_KEY,
          topic: topic ? topic.value : "Not chosen",
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        setTopic(null);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contest-star-wrapper">
      <div className="contest-star">
        <h3>&#9733;Send an Email to get Started!! &#9733;</h3>
        <form onSubmit={handleSubmit}>
          <p>your name:</p>
          <input type="text" name="name" required />
          <p>your email:</p>
          <input type="email" name="email" required />
          <p>topic:</p>
          <Select
            className="topic-select"
            options={topics}
            value={topic}
            onChange={setTopic}
            placeholder="Choose..."
            styles={selectStyles}
            menuPortalTarget={document.body}
          />
          <p>your message to us:</p>
          <textarea name="message" rows="2" required></textarea>
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
        </form>

        <p className="form-status" aria-live="polite">
          {status === "success" && "Thanks! Your message was sent ★"}
          {status === "error" && "Something went wrong, please try again."}
        </p>
      </div>
    </div>
  );
};

export default ContestStar;