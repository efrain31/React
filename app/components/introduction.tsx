import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 flex flex-col-reverse md:flex-row items-center h-full p-6 py-10 gap-6 md:py-0">

                {/* Imagen primero en móvil */}
                <div className="flex justify-center md:justify-start w-full md:w-1/2">
                    <Image
                        src="/img/space2.png"
                        priority
                        width={1200}
                        height={800}
                        alt="Avatar"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
                    />
                </div>

                {/* Texto y botones */}
                <div className="flex flex-col justify-center max-w-md mx-auto text-center md:text-left w-full md:w-1/2">
                    <h1 className="mb-4 text-lg sm:text-xl leading-snug md:text-4xl md:mb-10">
                        Si lo puedes imaginar, <br />
                        <TypeAnimation
                            sequence={[
                                'lo puedes programar',
                                1000,
                                'lo puedes mejorar',
                                1000,
                                'lo puedes crear',
                                1000,
                                'lo puedes desarrollar',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="max-w-[90%] text-center md:text-left mx-auto mb-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:mx-0 md:mb-8">
                        Como desarrollador frontend y backend, me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
                    </p>

                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start md:gap-10">
                        <a
                            href="https://github.com/efrain31?tab=repositories"
                            className="px-4 py-2 border-2 cursor-pointer text-xs sm:text-sm md:text-md rounded-xl hover:shadow-xl hover:shadow-white/50"
                        >
                            Ver proyectos
                        </a>
                        <a
                            href="https://wa.me/523327409328"
                            className="px-4 py-2 border-2 cursor-pointer text-xs sm:text-sm md:text-md text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
                        >
                            Contacta conmigo
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Introduction;
