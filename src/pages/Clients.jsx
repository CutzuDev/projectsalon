import "./Pages.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import FP from "../assets/FP.png";
import { ClientsList as list } from "./Lists";

function Clients() {
  // let test = [];
  // for (let i = 0; i < 320; i++) {
  //   test = [...test, i];
  // }

  return (
    <div>
      <section id="land-section" className="lsClientsEdit">
        {list.map((elem, index) => (
          <div className="beforeAfterSlider__container">
            <ReactBeforeSliderComponent
              key={index}
              className="BeforeAfterSlider"
              firstImage={elem.afterImage}
              secondImage={elem.beforeImage}
              delimiterColor={"#f5f5f5"}
              currentPercentPosition={90}
              delimiterIconStyles={{
                backgroundColor: "var(--main__color)",
                width: "50px",
                height: "50px",
                backgroundSize: "90%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${FP})`,
              }}
            ></ReactBeforeSliderComponent>
          </div>
        ))}
      </section>
      {/* <div className="grid-overlay">
        {test.map((e) => (
          <div className={`item i${e + 1}`} key={`${e + 1}`}>
            {e + 1}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Clients;
