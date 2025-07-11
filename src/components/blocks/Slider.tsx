'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

export default function Slider({images}: {images: string[]}) {
    const swiperRef = useRef<any>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <div className="slider">
            <Swiper
                modules={[Navigation, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;

                    setTimeout(() => {
                        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    });
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="slider-img-wrapper">
                            <Image
                                src={img}
                                alt=""
                                fill
                                priority={false}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="custom-pagination">
                {images.map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${activeIndex === i ? 'active' : ''}`}
                        onClick={() => swiperRef.current?.slideTo(i)}
                    />
                ))}
            </div>
            <div className="custom-nav">
                <button ref={prevRef} className="nav-arrow prev">
                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.58763 19.5846C9.7183 19.4518 9.82201 19.2939 9.89278 19.1198C9.96356 18.9457 10 18.759 10 18.5705C10 18.3819 9.96356 18.1952 9.89278 18.0211C9.82201 17.8471 9.7183 17.6891 9.58763 17.5563L3.20272 11.0142C3.07205 10.8814 2.96834 10.7234 2.89756 10.5493C2.82679 10.3753 2.79035 10.1886 2.79035 10C2.79035 9.81143 2.82679 9.62473 2.89756 9.45067C2.96834 9.2766 3.07205 9.11862 3.20272 8.98583L9.58763 2.44371C9.7183 2.31092 9.82201 2.15294 9.89279 1.97887C9.96356 1.80481 10 1.61811 10 1.42954C10 1.24097 9.96356 1.05427 9.89279 0.880208C9.82201 0.706143 9.7183 0.54816 9.58763 0.415371C9.32643 0.149328 8.9731 -4.48873e-08 8.6048 -6.09861e-08C8.2365 -7.70849e-08 7.88317 0.149328 7.62197 0.415371L1.22312 6.97177C0.439915 7.77525 -3.87476e-07 8.86441 -4.37114e-07 10C-4.86752e-07 11.1356 0.439915 12.2247 1.22312 13.0282L7.62197 19.5846C7.88317 19.8507 8.2365 20 8.6048 20C8.9731 20 9.32643 19.8507 9.58763 19.5846Z"
                            fill="#0E916B" />
                    </svg>
                </button>
                <button ref={nextRef} className="nav-arrow next">
                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.412368 0.415375C0.281703 0.548162 0.17799 0.706146 0.107215 0.880211C0.0364386 1.05428 0 1.24098 0 1.42954C0 1.61811 0.0364386 1.80481 0.107215 1.97888C0.17799 2.15294 0.281703 2.31092 0.412368 2.44371L6.79728 8.98583C6.92795 9.11862 7.03166 9.2766 7.10244 9.45067C7.17321 9.62473 7.20965 9.81143 7.20965 10C7.20965 10.1886 7.17321 10.3753 7.10244 10.5493C7.03166 10.7234 6.92795 10.8814 6.79728 11.0142L0.412368 17.5563C0.281703 17.6891 0.17799 17.8471 0.107215 18.0211C0.0364386 18.1952 0 18.3819 0 18.5705C0 18.759 0.0364386 18.9457 0.107215 19.1198C0.17799 19.2939 0.281703 19.4518 0.412368 19.5846C0.673568 19.8507 1.0269 20 1.3952 20C1.7635 20 2.11683 19.8507 2.37803 19.5846L8.77688 13.0282C9.56008 12.2247 10 11.1356 10 10C10 8.86441 9.56008 7.77526 8.77688 6.97177L2.37803 0.415375C2.11683 0.149332 1.7635 0 1.3952 0C1.0269 0 0.673568 0.149332 0.412368 0.415375Z"
                            fill="#0E916B" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
