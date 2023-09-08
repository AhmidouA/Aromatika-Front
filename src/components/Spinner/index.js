// -- Mes imports locaux
import "./style.scss";

// -- Mon composant
function Spinner() {
    return (
        <div className="spinner-container">
            <div class="lds-dual-ring"></div>
        </div>
    );
}

// -- Mon export
export default Spinner;
