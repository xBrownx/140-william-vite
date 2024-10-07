import React from 'react';
import { SlideCarousel } from "../../molecules";
import { Page } from "../../templates";
import { assets } from '../../../assets/assetKeys'

function Gallery() {
    return (
        <Page $fullscreen>
            <SlideCarousel
                images={assets.gallery.img.carousel}
            />
        </Page >
    );
}

export default React.memo(Gallery);
