import flacon_tof1 from "../../assets/flacon_tof1.jfif"
import flacon_tof2 from "../../assets/flacon_tof2.jfif"
import flacon_tof3 from "../../assets/flacon_tof3.jfif"

import './styles.scss';
import './stylesMobile.scss';

const TermsOfUse = () => {
    return (
        <div className='termsOfUse'>
            <div className='termsOfUse-part1'>
                <div className='termsOfUse-part1-figure'>
                    <img src={flacon_tof1} className='termsOfUse-part1-figure-img1' />

                    <img src={flacon_tof2} className='termsOfUse-part1-figure-img2' />

                    <img src={flacon_tof3} className='termsOfUse-part1-figure-img3' />
                </div>
                <div className="termsOfUse-part1-text">
                    <h1 className="termsOfUse-title">Conditions d'utilisation</h1>

                    <p className='termsOfUse-part1-text-subtitle'>Conditions d'emploi</p>

                    <p className="termsOfUse-part1-text-terms">Inhalation : Vous pouvez inhaler directement l'huile essentielle ou la mélanger à l'eau chaude et inhaler la vapeur produite.</p>
                    <p className="termsOfUse-part1-text-terms">Diffusion : Utilisez un diffuseur pour disperser l'huile essentielle dans l'air.</p>
                    <p className="termsOfUse-part1-text-terms">Bain : Ajoutez quelques gouttes d'huile essentielle à votre bain pour profiter de ses bienfaits.</p>
                    <p className="termsOfUse-part1-text-terms">Massage : Ajoutez quelques gouttes d'huile essentielle à une huile végétale pour un massage relaxant.</p>
                    <p className="termsOfUse-part1-text-terms">Application cutanée : Appliquez directement l'huile essentielle sur la peau, diluée avec une huile végétale.</p>

                    <div className='termsOfUse-part1-figure2'>
                    
                    <img src={flacon_tof2} className='termsOfUse-part1-figure2-img2bis' />
                    </div>

                    <p className='termsOfUse-part1-text-subtitle2'>Précautions d'emploi</p>

                    <p className="termsOfUse-part1-text-terms">Les huiles essentielles sont très concentrées et doivent être diluées dans une huile végétale avant d'être appliquées sur la peau. </p>
                    <p className="termsOfUse-part1-text-terms">Ne pas appliquer d'huiles essentielles directement sur la peau sans les diluer. </p>
                    <p className="termsOfUse-part1-text-terms">Ne pas ingérer les huiles essentielles à moins d'avoir consulté un professionnel de santé. </p>
                    <p className="termsOfUse-part1-text-terms">Ne pas appliquer les huiles essentielles sur les yeux, l'intérieur des oreilles ou sur les muqueuses. </p>
                    <p className="termsOfUse-part1-text-terms">Ne pas appliquer les huiles essentielles sur les bébés et les enfants de moins de 3 ans. </p>
                    <p className="termsOfUse-part1-text-terms">Les femmes enceintes et allaitantes devraient consulter un professionnel de santé avant d'utiliser des huiles essentielles. </p>
                    <p className="termsOfUse-part1-text-terms">Les personnes atteintes d'asthme, diabète ou épilepsie doivent consulter un professionnel de santé avant d'utiliser des huiles essentielles. </p>
                    <p className="termsOfUse-part1-text-terms">Les huiles essentielles ne doivent pas être utilisées par les personnes qui prennent des médicaments sans en parler à leur médecin. </p>
                    <p className="termsOfUse-part1-text-terms">Les huiles essentielles ne doivent pas être utilisées par les personnes ayant des antécédents médicaux ou des allergies sans en parler à leur médecin. </p>
                    <p className="termsOfUse-part1-text-terms">Les huiles essentielles ne doivent pas être utilisées par les personnes ayant des antécédents de cancer sans en parler à leur médecin. </p>
                    <p className="termsOfUse-part1-text-terms">Ne pas utiliser les huiles essentielles à proximité de sources de chaleur, telles que des bougies ou des poêles à bois. </p>
                </div>
            </div>

        </div>
    );
}

export default TermsOfUse
