import "./Header.css";
import Logo from "./Logo";
import {NavLink} from "react-router-dom";
import Nav from "../navigation/Navigation";


const Header = () => {
  return (
    <header className="top-nav">
      <div className="deco-star star1"></div>
      <div className="deco-star star2"></div>
      <div className="deco-star star3"></div>
      <div className="deco-star s4"></div>
      <div className="deco-star s5"></div>
      <div className="deco-star s6"></div>
      <div className="deco-star s7"></div>
      <div className="deco-star s8"></div>
      <div className="deco-star s9"></div>
      <div className="deco-star s10"></div>
      <div className="deco-star s11"></div>
      <div className="deco-star s12"></div>
      <div className="deco-star s13"></div>
      <div className="deco-star s14"></div>
      <NavLink to="/"><img id="logo" src={Logo} alt="a"></img></NavLink>
      <Logo />
      <button className="toggle-nav">&#9776;</button>
      <Nav />
    </header>
  );
};

export default Header;