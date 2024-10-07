import React from 'react';
import { SlideCarousel } from "../../molecules";
import { Page } from "../../templates";
import { assets } from '../../../assets/assetKeys'
import { CarouselContainer } from "./styles.jsx";

function Gallery() {
    return (
        <Page $fullscreen >
            <CarouselContainer >
                <SlideCarousel
                    images={assets.gallery.img.carousel}
                />
            </CarouselContainer >
        </Page >
    );
}

export default React.memo(Gallery);
