import LOGO from "../assets/LOGO.png";
import "./Components.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar__container">
        <div className="nav__title-and-logo">
          <img src={LOGO} alt="" className="nav__logo" />
          <h1 className="nav__title">Selim Lavinia</h1>
        </div>
        <ul className="nav__list">
          <Link to={"/servicii"}>
            <li className="nav__button">Servicii</li>
          </Link>
          <Link to={"/contact"}>
            <li className="nav__button nb__custom">Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
