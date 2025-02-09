import { ListProjects } from "@/components/custom/ListProjects.tsx";
import { Quisuisje } from "@/components/custom/Quisuisje.tsx";
import {useEffect, useState } from "react";

export function Home() {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 100);
    }, []);

    const name = "Clément GUERIN";

    return (
        <div className="w-full min-h-screen flex flex-col">
            <div className="home h-[80vh] flex justify-center items-center mt-28">
                <div className="flex justify-center flex-col items-center">
                    {/*<h1 className="text-4xl sm:text-5xl font-bold">Clément GUERIN</h1>*/}
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        {name.split("").map((letter, index) => (
                            <span
                                key={index}
                                className={`inline-block opacity-0 ${animate ? "animate-letter" : ""}`}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                        ))}
                    </h1>
                    <h2 className="text-xl sm:text-3xl">Apprenti ingénieur ESIEE</h2>
                    <h2 className="text-xl sm:text-3xl">Design & Développement web</h2>
                </div>
            </div>
            <div className="projets flex py-20" id="projets">
                <div className="flex-[1] flex justify-center">
                    <h3>Mes projets</h3>
                </div>
                <div className="flex-[3]">
                    <ListProjects />
                </div>
                <div className="flex-[1]"></div>
            </div>
            <div className="quisuisje flex py-20" id="quisuisje">
                <div className="flex-[1] flex justify-center">
                    <h3>Qui suis-je ?</h3>
                </div>
                <div className="flex-[3]">
                    <Quisuisje />
                </div>
                <div className="flex-[1]"></div>
            </div>
            <div className="contact flex py-20" id="contact">
                <div className="flex-[1] flex justify-center">
                    <h3>Me contacter</h3>
                </div>
                <div className="flex-[3]">
                    <p>Vous pouvez me contacter par mail à l'adresse suivante : <a href="mailto:contact@produclem.fr">contact@produclem.fr</a></p>
                    <a href=""></a>
                </div>
                <div className="flex-[1]"></div>
            </div>
        </div>
    );
}

export default Home;
