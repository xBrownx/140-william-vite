import { CarouselContainer, CarouselSlide, CustomImage, ImgContainer, } from "./styles";
import { Image } from "../../atoms";
import React from "react";

function FadeCarousel({activeShot, carouselItems}) {

    return (
        <CarouselContainer >
            {carouselItems.map((item, idx) => (
                <CarouselSlide
                    key={idx}
                    $isActive={activeShot === idx}
                >
                    <ImgContainer >
                        <CustomImage
                            src={item.imgSrc}
                            alt={""}
                        />
                    </ImgContainer >
                </CarouselSlide >
            ))}
        </CarouselContainer >
    );
}

export default React.memo(FadeCarousel);