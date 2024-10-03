import { CarouselContainer, CarouselSlide, CustomImage, ImgContainer, } from "./styles";
import React from "react";

function FadeCarousel({activeKey, carouselItems}) {

    return (
        <CarouselContainer >
            {Object.keys(carouselItems).map((key) => (
                <CarouselSlide
                    key={key}
                    $isActive={activeKey === key}
                >
                    <ImgContainer >
                        <CustomImage
                            src={carouselItems[key].src}
                            alt={carouselItems[key].alt}
                        />
                    </ImgContainer >
                </CarouselSlide >
            ))}
        </CarouselContainer >
    );
}

export default React.memo(FadeCarousel);