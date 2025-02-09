import photo_clement_guerin from "../../assets/images/photo_clement_guerin.png";
import esiee_logo from "../../assets/images/esiee.png";
import univeiffel_logo from "../../assets/images/univeiffel.png";
import cea_logo from "../../assets/images/cea.png";
import mmi_logo from "../../assets/images/mmi.png";

export function Quisuisje() {
    return (
        <div className="quisuisje flex-col justify-center items-center">
            <div className="flex">
                <div className="flex flex-col gap-5">
                    <p>
                        Salut, moi c’est <b>Clément Guérin</b>, j’ai 21 ans et je suis <b>apprenti ingénieur</b> à l’<b>ESIEE Paris</b>.
                    </p>
                    <p>
                        <b>Passionné de web</b> depuis le lycée, je crée des sites et des API en jonglant entre React, VueJS,
                        Symfony et plein d’autres outils sympas. Je suis en alternance au CEA de Saclay en tant que
                        <b> développeur d’applications web</b>.
                    </p>
                </div>
                <div className="photo_clement_guerin">
                    <img src={photo_clement_guerin} alt="Image Clement GUERIN"/>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p>
                    En dehors du code j’adore la <b>musique</b>. Je suis <b>batteur</b> et <b>pianiste</b> depuis enfant.
                    J’aime aussi tout ce qui touche à la <b>vidéo et au cinéma</b>.
                </p>
                <p>
                    Créatif et toujours curieux, j’aime explorer plein de trucs et tester de nouvelles idées dans <b>mes projets</b> !
                </p>
            </div>
            <div className="logos mt-6">
                <div className="flex justify-around items-center">
                    <a href="https://www.esiee.fr/" title="esiee.fr"><img className="w-40 object-scale-down" src={esiee_logo} alt="Logo ESIEE"/></a>
                    <a href="https://www.cea.fr/" title="cea.fr"><img className="w-24 object-scale-down" src={cea_logo} alt="Logo CEA"/></a>
                    <a href="https://www.univ-gustave-eiffel.fr/" title="Université G.Eiffel"><img className="w-52 object-scale-down" src={univeiffel_logo} alt="Logo Université Gustave Eiffel"/></a>
                    <a href="https://iut-blois.univ-tours.fr/version-francaise/navigation/formations/dut-metiers-du-multimedia-et-de-linternet" title="BUT MMI Blois"><img className="w-36 object-scale-down" src={mmi_logo} alt="Logo BUT MMI"/></a>
                </div>
            </div>
        </div>
    );
}