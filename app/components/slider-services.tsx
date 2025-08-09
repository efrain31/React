"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRight } from "lucide-react";
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from "swiper"; 
import { serviceData } from '@/data';
import "swiper/css";
import "swiper/css/pagination";


const SliderServices = () => {
    const swiperRef = useRef<SwiperType | null>(null); 

    return (
        <div className="relative flex items-center">
            {/* Swiper */}
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    }
                }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
            >
                {serviceData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex px-6 py-8 h-auto md:h-[300px] rounded-lg cursor-pointer bg-[rgba(246, 246, 246, 0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                            <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
                            <div>
                                <h3 className="mb-4 text-lg">{item.title}</h3>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Flecha de control */}
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-[-50px] md:right-[-60px] bg-secondary p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
                <ArrowRight className="w-6 h-6 text-white" />
            </button>
        </div>
    );
}

export default SliderServices;