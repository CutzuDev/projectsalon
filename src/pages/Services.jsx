import ScrollContainer from "react-indiana-drag-scroll";
import { ServicesList as list } from "./Lists";
import "./Pages.css";
import { useState } from "react";
import FP from "../assets/FP.png";

function Services() {
  const [scValue, setscValue] = useState("flex");

  setTimeout(() => {
    setscValue("none");
  }, 6600);

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
                  <li className="services__item-element" key={i}>
                    {e.service}
                    <span className="services__item-element--price">
                      {e.price} RON
                    </span>
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

export default Services;
