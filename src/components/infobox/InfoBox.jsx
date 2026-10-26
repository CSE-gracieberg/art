import "./InfoBox.css";

const InfoBox = ({ title, children }) => {
  return (
    <div className="info-box">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default InfoBox;