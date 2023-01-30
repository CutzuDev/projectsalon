import AboutMePicture from "../assets/about_me_picture.jpeg";
import "./Pages.css";

function Home() {
  let test = [];
  for (let i = 0; i < 200; i++) {
    test = [...test, i];
  }

  return (
    <div>
      <section id="land-section">
        <h1 className="about-me__title">Despre Mine</h1>
        <div className="about-me__para-container">
          <p className="about-me__para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            voluptatibus quidem doloribus architecto consectetur ratione,
            aliquid earum quam, molestiae similique fugit numquam, sint
            perferendis autem fugiat laudantium vel eveniet minima mollitia!
            Dolorem pariatur officiis doloribus rerum. Eveniet harum voluptas
            vel sunt maiores corporis quam in, nihil eum est, fuga debitis
            explicabo non beatae magnam delectus culpa. Magnam in placeat
            voluptatum dolore accusamus.
          </p>
        </div>
        <div className="about-me__picture">
          <img src={AboutMePicture} alt="" />
        </div>
        <div className="about-me__button-container">
          <button className="about-me__button">Clienti</button>
        </div>
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

export default Home;
