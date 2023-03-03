import ScrollContainer from "react-indiana-drag-scroll";
import { ServicesList as list } from "./Lists";
import "./Pages.css";
import { useState } from "react";
import FP from "../assets/FP.png";
import { useMediaQuery } from "react-responsive";

function Services() {
  const [scValue, setscValue] = useState("flex");

  setTimeout(() => {
    setscValue("none");
  }, 6600);

  const isPhone = useMediaQuery({ query: "(min-width: 480px)" });

  return (
    <div onClick={() => setscValue("none")}>
      <div className="swipe__container" style={{ display: `${scValue}` }}>
        <div className="swipe__bubble--container">
          <div className="swipe__bubble">
            <img draggable={false} src={FP} alt="" />
          </div>
        </div>
      </div>
      <section id="land-section">
        <ScrollContainer
          className="services__container scroll-container"
          onStartScroll={() => setscValue("none")}
          vertical={false}
          horizontal={true}
          hideScrollbars={true}
          activationDistance={20}
          style={{
            overflow: "unset",
            overflowX: "auto",
            overflowY: "hidden",
          }}
        >
          {list.map((e, i) => (
            <div className="services__list" key={i}>
              <h3 className="services__item-title">{e.title}</h3>
              <ul className="services__item-element--container">
                {e.list.map((e, i) => (
                  <li className="services__item--element-container" key={i}>
                    <div className="services__item-element">
                      <span className="services__item-element--service">
                        {e.service}
                      </span>
                      <span className="services__item-element--price">
                        {e.price} RON
                      </span>
                    </div>
                    {descriptionFunc(e.details)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ScrollContainer>
      </section>
    </div>
  );
}

function descriptionFunc(details) {
  if (details) {
    return (
      <span className="services__item-element--description">{details}</span>
    );
  }
}

export default Services;
