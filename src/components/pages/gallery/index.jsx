import React from 'react';
import { galleryConst as CONST } from "./constants";
import { SlideCarousel } from "../../molecules";
import { Page } from "../../templates";


function Gallery() {
    return (
        <Page >
            <SlideCarousel
                images={CONST.carousel}
            />
        </Page >
    );
}

export default React.memo(Gallery);
