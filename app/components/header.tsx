"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container max-w-6xl mx-auto flex flex-wrap md:flex-nowrap md:items-center md:justify-between px-4">
                    <Link href='/'>
                        <h1 className="hidden sm:block my-3 text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left min-w-[250px]">
                            Un poquito de mi
                            <span className="text-secondary"> Dev Efrain Hdez</span>
                        </h1>

                    </Link>
                    <div>
                        {/* Contenedor para móvil: vertical y fixed a la izquierda */}
                        <div className="fixed top-1/2 left-2 -translate-y-1/2 flex flex-col space-y-4 md:hidden z-50">
                            {socialNetworks.map(({ logo, src, id }) => (
                                <Link
                                    key={id}
                                    href={src}
                                    target="_blank"
                                    className="transition-all duration-300 hover:text-secondary text-3xl"
                                    aria-label={`Enlace a ${src}`}
                                >
                                    {logo}
                                </Link>
                            ))}
                        </div>

                        {/* Contenedor para escritorio: horizontal y normal */}
                        <div className="hidden md:flex flex-wrap justify-start gap-5 md:gap-7 mt-0">
                            {socialNetworks.map(({ logo, src, id }) => (
                                <Link
                                    key={id}
                                    href={src}
                                    target="_blank"
                                    className="transition-all duration-300 hover:text-secondary text-2xl sm:text-3xl"
                                    aria-label={`Enlace a ${src}`}
                                >
                                    {logo}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;
