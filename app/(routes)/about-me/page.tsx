"use client"

import { Avatar } from "@/app/components/avatar";
import ContainerPage from "@/app/components/container-page";
import CounterServices from "@/app/components/counter-services";
import TimeLine from "@/app/components/time-line";
import TransitionPage from "@/app/components/transition-page";
import { CoverParticles } from "@/app/components/cover.particle";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
            <CoverParticles />
                
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                     Mi{' '}
                    <span className="font-bold text-secondary">
                        trayectoria profesional
                    </span>
                </h1>

                <CounterServices />

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;