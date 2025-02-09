import {CardHorizontale} from "@/components/custom/CardHorizontale";
import pepsi_passion from "@/assets/images/pepsi_passion2.png";
import activite_proche from "@/assets/images/activites_proches.png";
import adobe_xd from "@/assets/images/adobe_xd.png";
import adobe_ps from "@/assets/images/adobe_ps.png";
import figma from "@/assets/images/figma.png";
import leaflet from "@/assets/images/leaflet.png";
import react from "@/assets/images/react.png";
import tailwind from "@/assets/images/tailwind.png";
import html from "@/assets/images/html.png";
import css from "@/assets/images/css.png";
import js from "@/assets/images/js.png";

export const projects = [
    {
        id: 1,
        title: "Création de maquettes site capsule PEPSI®",
        description: "Création de maquettes web desktop & mobile pour faire la promotion fictive d'un produit dérivé de PEPSI® (inventé). Réalisation du packaging du produit alléchant et attractif.",
        image: pepsi_passion,
        technologies: [adobe_xd, figma, adobe_ps]
    },
    {
        id: 2,
        title: "Développement d'une app web des \"activités proches de chez vous\"",
        description: "Application web permettant de trouver des activités à proximité de chez soi / d'un lieu en particulier. Utilisation de l'API Leaflet pour afficher les activités sur une carte.",
        image: activite_proche,
        technologies: [html, css, js, leaflet]
    },
    {
        id: 2,
        title: "Portfolio me présentant ainsi que mes projets",
        description: "Site personnel me présentant ainsi que mes projets. Réalisé avec React et Tailwind CSS.",
        image: "https://placehold.co/400x350",
        technologies: [react, tailwind, html, css]
    }
];


export function ListProjects() {
    return (
        <div className="flex flex-col gap-5">
            {projects.map((project) => (
                <CardHorizontale
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                />
            ))}
        </div>
    );
}