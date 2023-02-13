import "./Pages.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import FP from "../assets/FP.png";

function Clients() {
  let test = [];
  for (let i = 0; i < 320; i++) {
    test = [...test, i];
  }

  let list = [
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
    {
      firstImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185146993807390/Screenshot_02-02-2023_17-32-17.png",
      },
      secondImage: {
        imageUrl:
          "https://media.discordapp.net/attachments/857281682242273361/1072185241688608888/Screenshot_02-02-2023_17-36-11.png",
      },
    },
  ];

  return (
    <div>
      <section id="land-section" className="lsClientsEdit">
        {list.map((elem, index) => (
          <ReactBeforeSliderComponent
            key={index}
            className="BeforeAfterSlider"
            firstImage={elem.firstImage}
            secondImage={elem.secondImage}
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
        ))}
      </section>
      <div className="grid-overlay">
        {test.map((e) => (
          <div className={`item i${e + 1}`} key={`${e + 1}`}>
            {e + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
