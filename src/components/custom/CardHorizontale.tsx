type ProjectProps = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
};

export function CardHorizontale({ title, description, image, technologies }: ProjectProps) {
    return (
        <div className="cardHorizontale flex">
            <div className="apercuProjet flex-[1]">
                <img src={image} alt={`Aperçu de ${title}`} />
            </div>
            <div className="informationsProjet flex-[2] flex flex-col justify-between mb-5 me-6">
                <div className="descriptionProjet">
                    <h3>{title}</h3>
                    <p className="me-4 mt-3">{description}</p>
                </div>
                <div className="technologiesProjet mb-4">
                    <h4>Technologies</h4>
                    <ul className="flex gap-4 mt-3">
                        {technologies.map((tech, index) => {
                            const techName = tech.split("/").pop()?.replace(/\.[^/.]+$/, "") || "tech";
                            return (
                                <img
                                    key={index}
                                    className="w-12 h-12 object-scale-down"
                                    src={tech}
                                    alt={techName}
                                    title={techName}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
