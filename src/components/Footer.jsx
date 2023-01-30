import { Instagram, Facebook } from "../assets/SVGS";
import "./Components.css";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <ul className="footer__list">
          <a href="https://muie.com" target={"_blank"} className="footer__link">
            <Instagram size={25} color={"#fdc5f5"} />
            <h4 className="footer__link--text">Instagram</h4>
          </a>
          <a href="https://muie.com" target={"_blank"} className="footer__link">
            <Facebook size={25} color={"#fdc5f5"} />
            <h4 className="footer__link--text">Facebook</h4>
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
