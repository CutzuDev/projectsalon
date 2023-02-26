import "./Pages.css";

function Contact() {
  return (
    <div>
      <section id="land-section">
        <div className="contact__container">
          <div className="contact__item-list">
            <div className="contact__item">
              <h1 className="contact__title">Locatie</h1>
              <p className="contact__text">
                Bulevardul Alexandru Obregia Nr 27 Bloc A18 Sc 1 ap 2
              </p>
            </div>
            <div className="contact__item">
              <h1 className="contact__title">Telefon</h1>
              <a href="tel:+40767600026" className="contact__text">
                0767600026
              </a>
            </div>
            <div className="contact__item">
              <h1 className="contact__title">Email</h1>
              <a
                href="mailto:Selim.lavinia@yahoo.com"
                className="contact__text"
              >
                Selim.lavinia@yahoo.com
              </a>
            </div>
          </div>
          <div className="map__container">
            {/* <iframe
              className="mapClass"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1510.2815013762702!2d26.112481209629333!3d44.39147239292978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fe465e1e006d%3A0xd56850cb82d4bdb9!2sMega%20Image!5e0!3m2!1sen!2sro!4v1676486702494!5m2!1sen!2sro"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <p>GOOGLE MAPS IN PROGRESS</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
