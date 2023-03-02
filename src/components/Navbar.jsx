import LOGO from "../assets/LOGO.png";
import "./Components.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Contact } from "../assets/SVGS";

function Navbar() {
  const isNOTPhone = useMediaQuery({ query: "(min-width: 480px)" });
  const isPhone = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <nav>
      <div className="navbar__container">
        <div className="nav__title-and-logo">
          <Link to={"/"}>
            <img draggable={false} src={LOGO} alt="" className="nav__logo" />
          </Link>
          {isNOTPhone && <h1 className="nav__title">Selim Lavinia</h1>}
        </div>
        <ul className="nav__list">
          <Link to={"/servicii"}>
            <li className="nav__button">Servicii</li>
          </Link>
          <Link to={"/clients"}>
            <li className="nav__button">Clienti</li>
          </Link>
          {isNOTPhone && (
            <Link to={"/contact"}>
              <li className="nav__button nb__custom">Contact</li>
            </Link>
          )}
          <Link to={"/contact"} className="nb__customeP">
            <Contact size={30} color={"#fdc5f5"} />
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
