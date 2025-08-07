import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";
import AvatarPortfolio2 from "@/app/components/avatar-portfolio";

import AvatarPortfolio from "@/app/components/avatar-portfolio";
import CircleImage from "@/app/components/circle-image";
import TransitionPage from "@/app/components/transition-page";
import ContainerPage from "@/app/components/container-page";
import PortfolioBox from "@/app/components/portfolio-box";
import { CoverParticles } from "@/app/components/cover.particle";

const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            <AvatarPortfolio />
            <AvatarPortfolio2/>
            <CircleImage />
            <CoverParticles />
            
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;