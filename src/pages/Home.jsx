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
        <p className="about-me__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam,
          aperiam quaerat dolorem praesentium animi asperiores similique ab sit
          magni consequuntur necessitatibus enim quos. Natus nisi libero
          aspernatur doloremque quam. Debitis.
        </p>
        <div className="about-me__buttons-container">
          <div className="about-me__button">Button 1</div>
          <div className="about-me__button">Button 2</div>
        </div>
        <div className="about-me__picture">
          <img
            src="https://cdn.discordapp.com/avatars/816674652738289684/a_2102d221e1beff639274cad2a8819670.png"
            alt=""
          />
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
