const SpotlightSlide = ({ image, alt, active }) => {
  return (
    <div className={active ? "mySlides active" : "mySlides"}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default SpotlightSlide;