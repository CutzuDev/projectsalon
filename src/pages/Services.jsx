import { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./Pages.css";

function Services() {
  let test = [];
  const serviceContainerItem = useRef(null);

  for (let i = 0; i < 160; i++) {
    test = [...test, i];
  }
  let cards = [
    {
      title: "Micropigmentare",
      list: ["Buze - 500", 2, 3, 4, 5, 6],
    },
    {
      title: "test",
      list: [1, 2, 3, 4, 5, 6],
    },
    {
      title: "test",
      list: [1, 2, 3, 4, 5, 6],
    },
    {
      title: "test",
      list: [1, 2, 3, 4, 5, 6],
    },
    {
      title: "test",
      list: [1, 2, 3, 4, 5, 6],
    },
    {
      title: "test",
      list: [1, 2, 3, 4, 5, 6],
    },
    {
      title: "test",
      list: [1, 2, 3, 4, 5, 6],
    },
  ];

  return (
    <div>
      <section id="land-section">
        <ScrollContainer
          className="services__container scroll-container"
          horizontal={true}
          activationDistance={20}
        >
          {cards.map((e, i) => (
            <div className="services__list" key={i} ref={serviceContainerItem}>
              <h3 className="services__item-title">{e.title}</h3>
              <ul className="services__item-element--container">
                {e.list.map((e, i) => (
                  <li className="services__item-element" key={i}>
                    {e}RON
                  </li>
                ))}
              </ul>
            </div>
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
