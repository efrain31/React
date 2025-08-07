//npm install react-type-animation
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
            <Image src="/img/space2.png" priority width="800" height="800" alt="Avatar" />
            <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">If you can think it, <br />
                        <TypeAnimation
                            sequence={[
                                'you can program it',
                                1000,
                                'you can optimize it',
                                1000,
                                'you can implement it ',
                                1000,
                                'you can develop it ',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como desarrollador frontend y backend, me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="https://github.com/efrain31?tab=repositories" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            See projects
                        </a>
                        <a href="https://wa.me/523327409328"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;