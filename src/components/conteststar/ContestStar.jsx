import "./ContestStar.css";

const ContestStar = () => {
  return (
    <div className="contest-star-wrapper">
      <div className="contest-star">
        <h3>&#9733;Send an Email to get Started!! &#9733;</h3>
        <form>
          <p>your name:</p>
          <input type="text" name="name" />
          <p>your email:</p>
          <input type="email" name="email" />
          <p>your message to us:</p>
          <textarea name="message" rows="3"></textarea>
          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContestStar;