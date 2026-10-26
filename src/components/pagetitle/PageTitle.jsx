import "./PageTitle.css";

const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="page-title">
      <h1>&#9733; {title} &#9733;</h1>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default PageTitle;