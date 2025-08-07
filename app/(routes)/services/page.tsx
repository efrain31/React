import AvatarServices from "@/app/components/avatar-services";
import CircleImage from "@/app/components/circle-image";
import SliderServices from "@/app/components/slider-services";
import TransitionPage from "@/app/components/transition-page";
import { CoverParticles } from "@/app/components/cover.particle";
const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <CoverParticles />
            

            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
    <div className="max-w-[450px]">
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-secondary"> servicios.</span>
        </h1>
        <p className="mb-3 text-xl text-gray-300">
            Ofrezco servicios de desarrollo web frontend y backend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, entre otras con  diseño de interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.
        </p>
        <a
            href="https://wa.me/523327409328"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-secondary hover:bg-secondary/65 flex justify-center"
        >
            Contacta conmigo
        </a>
    </div>
    {/* SLIDER */}
    <div>
        <SliderServices />
    </div>
</div>


        </>
    );
}

export default ServicesPage;

//npm install swiper
//agregar en el layout principal