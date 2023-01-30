import LOGO from "../assets/LOGO.png";
import "./Components.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar__container">
        <div className="nav__title-and-logo">
          <img src={LOGO} alt="" className="nav__logo" />
          <h1 className="nav__title">Selim Lavinia</h1>
        </div>
        <ul className="nav__list">
          <li className="nav__button">Servicii</li>
          <li className="nav__button">Clienti</li>
          <li className="nav__button">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
