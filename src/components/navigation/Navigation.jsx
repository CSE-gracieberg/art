import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const links = [
  { label: "Home", path: "/" },
  { label: "Tutorials", path: "/tutorials" },
  { label: "Contests", path: "/contests" },
  { label: "Community", path: "/community" },
  { label: "Helpful Resources", path: "/resources" },
];

const Navigation = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
    onNavigate?.();
  };

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-controls="main-nav"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <nav id="main-nav" className={isOpen ? "open" : ""}>
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                onClick={handleNavigate}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;