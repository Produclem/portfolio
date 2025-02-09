import { ReactNode } from "react";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";
import { Outlet } from "react-router-dom";

interface LayoutProps {
    children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen" id="homeDeb">
            <div className="background absolute w-full h-full -z-10">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
            </div>
            <Header />
            <main className="flex-grow flex flex-col">
                {children || <Outlet />}
            </main>
            <Footer />
        </div>
    );
};
