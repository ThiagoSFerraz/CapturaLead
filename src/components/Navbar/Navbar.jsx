import { useState } from "react";
import "../../styles/components/navbar.css";
import logo from "./images/LogoCapturaLead.png";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="nav">
      <img src={logo} alt="logo" />
      <ul className="navLinks" id={showLinks ? "active" : ""}>
        <li>
          <a >LOREM</a>
        </li>
        <li>
          <a >IPSUM</a>
        </li>
        <li>
          <a>LOREM IPSUM</a>
        </li>
        <li>
          <a >LOREM</a>
        </li>
        <li>
          <a >
            <button>Lorem Ipsum</button>
          </a>
        </li>
      </ul>
      <div onClick={() => setShowLinks(!showLinks)} className="toggleIcon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}
