import ScrollContainer from "react-indiana-drag-scroll";
import list from "./ServicesList";
import "./Pages.css";
import { useRef } from "react";

function Services() {
  let test = [];

  const ref = useRef(null);

  for (let i = 0; i < 160; i++) {
    test = [...test, i];
  }

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    console.log("click")
  };

  return (
    <div>
      <section id="land-section">
        <ScrollContainer
          className="services__container scroll-container"
          horizontal={true}
          hideScrollbars={false}
          activationDistance={20}
          ref={ref}
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

        <button className="marius" onClick={() => scroll(-20)}>
          LEFT
        </button>
        <button className="marius" onClick={() => scroll(20)}>
          RIGHT
        </button>
      </section>
      <div className="grid-overlay fwh">
        {test.map((e) => (
          <div className={`item i${e + 1}`} key={`${e + 1}`}>
            {e + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
