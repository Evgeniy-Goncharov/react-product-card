import { Image } from "../elements";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from 'swiper';
import { StyledButton, StyledSwiper, StyledWrapper } from './styles';
import { useRef } from "react";


export default function Slider ({ images }) {
    SwiperCore.use([Navigation]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <StyledWrapper>
        <StyledSwiper 
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current
            }}
            freeMode
            watchSlidesProgress
            slidesPerView={1} 
            spaceBetween={20} 
            loop
        >
            {images &&
            images.length &&
            images.map((image) => (
                <SwiperSlide key={image}>
                    <Image 
                        src={image} 
                        alt='Изображение товара'
                        width='200'
                        height='257'
                        maxWidth='200'
                    />
                </SwiperSlide>
            ))}
            <StyledButton left ref={navigationPrevRef} title='Назад'>
                &lt;
            </StyledButton>
            <StyledButton right ref={navigationNextRef} title='Вперед'>
                &gt;
            </StyledButton>
        </StyledSwiper>
        </StyledWrapper>
    )
}