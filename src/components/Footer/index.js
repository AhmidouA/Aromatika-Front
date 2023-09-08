// -- Mes imports extérieurs
import Map from "./Map/index";
import About from "./About/index";
import Social from "./Social/index";

// -- Mes imports locaux
import "./style.scss";

// -- Mon composant
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-title">
        <h1 className="Footer-title-main">Aromatikä</h1>
      </div>
      <div className="Footer-links">
        <Map />
        <About />
        <Social />
      </div>
    </div>
  );
}

// -- Mon export
export default Footer;
