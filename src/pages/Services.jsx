import { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./Pages.css";

function Services() {
  let test = [];
  const serviceContainerItem = useRef(null);

  for (let i = 0; i < 160; i++) {
    test = [...test, i];
  }
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <section id="land-section">
        <ScrollContainer
          className="services__container scroll-container"
          horizontal={true}
sad          activationDistance={20}
        >
          {cards.map((e, i) => (
            <ul
              className="services__list ssa"
              key={i}
              ref={serviceContainerItem}
            >
              Lista {e}
            </ul>
          ))}
        </ScrollContainer>
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
