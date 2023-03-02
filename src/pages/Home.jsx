import { Link } from "react-router-dom";
import AboutMePicture from "../assets/about_me_picture.jpeg";
import "./Pages.css";

import { useMediaQuery } from "react-responsive";

function Home() {
  const isPhone = useMediaQuery({ query: "(min-width: 480px)" });

  const list = [
    "Micropigmentare Sprancene",
    "Micropigmentare Buze",
    "Stilizare Sprancene",
    "Laminare Sprancene",
    "Indepartare tatuaje cu laser",
    "Microneedling",
    "Tratamente Faciale",
    "Epilare cu ceara",
    "Hyoluron Pen (Marire Buze)",
  ];

  return (
    <div>
      <section id="land-section">
        <Link to={"/servicii"} className="about-me__services">
          <h1 className="about-me__services--title">Serviciile Mele</h1>
          <ul className="about-me__services--list">
            {list.map((e) => (
              <li className="about-me__services--list-item">
                <span className="amsli--misc">·</span> {e}
              </li>
            ))}
          </ul>
        </Link>
        <div className="about-me__picture">
          <img src={AboutMePicture} draggable={false} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
