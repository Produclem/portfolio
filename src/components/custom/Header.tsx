import { useState, useEffect } from "react";

export const Header = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 100);
    }, []);
    const triggerAnimation = () => {
        setAnimate(false);
        setTimeout(() => {
            setAnimate(true);
        }, 10);
    };

    const [isOpen, setIsOpen] = useState(false);
    let touchStartY = 0;

    // Gérer le swipe vers le haut pour fermer le menu
    const handleTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
        const touchEndY = e.touches[0].clientY;
        if (touchStartY - touchEndY > 50) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("touchstart", handleTouchStart);
            document.addEventListener("touchmove", handleTouchMove);
        } else {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
        }

        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
        };
    }, [isOpen]);

    return (
        <header className="p-4 w-full flex justify-between items-center bg-transparent fixed top-0 left-0 z-50">
            <h1 onClick={triggerAnimation} className="cursor-pointer"><a href="#homeDeb">
                <span id="C" className={`inline-block ${animate ? "animate-bounceIn" : "opacity-0"}`}>C</span>
                <span id="G" className={`inline-block ${animate ? "animate-rotateInScale" : "opacity-0"}`}>g</span></a>
            </h1>
            <nav>
                <ul className="hidden sm:flex space-x-10 me-4">
                    <li><a href="#projets" className="text-2xl">projets</a></li>
                    <li><a href="#quisuisje" className="text-2xl">qui suis-je</a></li>
                    <li><a href="#contact" className="text-2xl">contact</a></li>
                </ul>

                <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 cursor-pointer">
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div className={`absolute top-0 left-0 w-screen h-screen bg-black/90 backdrop-blur-md text-black flex flex-col items-center justify-center transition-transform ${isOpen ? "translate-y-0" : "-translate-y-full"} sm:hidden`}>
                    <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsOpen(false)}>
                        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" fill="white" className="w-10 h-10">
                            <path d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.498 2.498 0 0 0-3.535 0a2.498 2.498 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.493 2.493 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267L21.533 18.002z"></path>
                        </svg>
                    </div>
                    <ul className="flex flex-col space-y-8 text-2xl">
                        <li><a href="#homeDeb" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="#projets" onClick={() => setIsOpen(false)}>Projets</a></li>
                        <li><a href="#quisuisje" onClick={() => setIsOpen(false)}>Qui suis-je ?</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Me contacter</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
