import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import * as Styled from './styles.jsx'
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function SlideCarousel({images, rounded}) {
        return (
            <Styled.Container>
                <Swiper
                    id={"swiper"}
                    modules={[Navigation, Pagination]}
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    centeredSlides={true}
                    style={{
                        "--swiper-pagination-color": "#FFF",
                        "--swiper-navigation-color": "#FFF",
                        height: "100%",
                    }}
                >
                    {images.map((image, i) => {
                        return (
                            <Styled.Slide
                                id={"swiper-slide"}
                                as={SwiperSlide}
                                key={i}
                            >
                                <SwiperImg
                                    image={image}
                                    rounded={rounded}
                                />
                            </Styled.Slide>

                        );
                    })}
                </Swiper>
            </Styled.Container>
        );
    }


const SwiperImg = React.memo(
    function SwiperImg({image, rounded}) {
        return (
            <Styled.SwiperImage
                id={"swiper-image"}
                $rounded={rounded}
                src={image.src}
                alt={image.alt}
            />
        );
    }
);

export default React.memo(SlideCarousel);


