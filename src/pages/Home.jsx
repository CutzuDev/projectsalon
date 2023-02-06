import AboutMePicture from "../assets/about_me_picture.jpeg";
import "./Pages.css";

function Home() {
  let test = [];
  for (let i = 0; i < 160; i++) {
    test = [...test, i];
  }

  return (
    <div>
      <section id="land-section">
        <h1 className="about-me__title">Despre Mine</h1>
        <div className="about-me__para-container">
          <p className="about-me__para">
            Lucrez in domeniul beauty de 7 ani, sunt acreditata in
            dermopigmentare, make-up, si tatto remove (stergere indepartare
            tatuaje), iubesc ceea ce fac si mereu imi doresc sa obtin cele mai
            bune rezultate pentru clientii mei.
          </p>
        </div>
        <div className="about-me__picture">
          {/* <img src={AboutMePicture} alt="" /> */}
        </div>
        <div className="about-me__button-container">
          <button className="about-me__button">Clienti</button>
        </div>
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

export default Home;
