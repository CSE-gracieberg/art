import "./Navigation.css";
import {NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><HashLink to ="/#about">About</HashLink></li>
        <li><NavLink to="/">Tutorials</NavLink></li>
      </ul>
    </nav>

  )
};

export default Nav;