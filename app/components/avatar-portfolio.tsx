"use client"

import Image from 'next/image';

import { MotionTransition, MotionTransition2 } from './transition-component';

const AvatarPortfolio = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute ">
            <Image src="/img/space6.png" width="300" height="300" className="w-full h-full " alt="Particles " />
        </MotionTransition>
        
    );
}

const AvatarPortfolio2 = () => {
    return (
        <MotionTransition2 position='bottom' className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/img/space6.png" width="300" height="300" className="w-full h-full " alt="Particles " />
        </MotionTransition2>
        
    );
}


export default AvatarPortfolio;
export { AvatarPortfolio2 };