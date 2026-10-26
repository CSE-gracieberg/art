import { NavLink } from "react-router-dom";
import "./Navigation.css";

const links = [
  { label: "Home", path: "/" },
  { label: "Tutorials", path: "/tutorials" },
  { label: "Contests", path: "/contests" },
  { label: "Community", path: "/community" },
  { label: "Helpful Resources", path: "/resources" },
];

const Navigation = ({ isOpen, onNavigate }) => {
  return (
    <nav id="main-nav" className={isOpen ? "open" : ""}>
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} onClick={onNavigate}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

