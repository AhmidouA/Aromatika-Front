// -- Mes imports locaux
import "../style.scss";

// -- Mon composant
function About() {
  return (
    <>
      {/* DIV pour ordinateur */}
      <div className="Footer-about">
        <h2 className="Footer-about-subtitle">A propos</h2>
        <a
          href="/a-propos"
          aria-label="Learn more about who we are"
        >
          Qui sommes-nous ?
        </a>
        <a
          href="#"
          aria-label="Contact us"
        >
          Nous contacter
        </a>
        <a
          href="#"
          aria-label="Learn more about our GCU"
        >
          CGU
        </a>
      </div>

      {/* DIV pour mobile */}
      <div className="Footer-about-mobile">
        <a
          href="/a-propos"
          className="Footer-about-mobile-subtitle"
        >
          A propos
        </a>
      </div>
    </>
  );
}

// -- Mon export
export default About;
