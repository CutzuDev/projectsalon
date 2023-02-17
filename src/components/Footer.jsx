import { Instagram, Facebook, TikTok } from "../assets/SVGS";
import { useMediaQuery } from "react-responsive";
import MWLOGO from "../assets/MWLOGO.png";
import "./Components.css";

function Footer() {
  const isPhone = useMediaQuery({ query: "(min-width: 480px)" });

  return (
    <footer>
      <div className="footer__container">
        <ul className="footer__credits">
          <li className="footer__credits--link">
            <h4 className="footer__credits-link--text">
              <span className="fclts">
                Developed by
                <a
                  className="footer__credits--scolor"
                  href="https://www.alexfarkas.me/"
                  target={"_blank"}
                >
                  Alex Farkas
                </a>
                at
              </span>
              <span className="fclts">
                <img src={MWLOGO} className="footer__credits-photo" />
                <a
                  href="https://www.motionwebsites.net/"
                  target={"_blank"}
                  className="footer__credits--scolor"
                >
                  Motion Websites
                </a>
              </span>
            </h4>
          </li>
        </ul>
        <ul className="footer__socials">
          <a
            href="https://www.instagram.com/selim_lavinia/"
            target={"_blank"}
            className="footer__social-link"
          >
            <Instagram size={25} color={"#fdc5f5"} />
            {isPhone && (
              <h4 className="footer__social-link--text">Instagram</h4>
            )}
          </a>
          <a
            href="https://www.facebook.com/lavinia.selim"
            target={"_blank"}
            className="footer__social-link"
          >
            <Facebook size={25} color={"#fdc5f5"} />
            {isPhone && <h4 className="footer__social-link--text">Facebook</h4>}
          </a>
          <a
            href="https://www.tiktok.com/@selimlaviniamiky"
            target={"_blank"}
            className="footer__social-link"
          >
            <TikTok size={25} color={"#fdc5f5"} />
            {isPhone && <h4 className="footer__social-link--text">Tiktok</h4>}
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
