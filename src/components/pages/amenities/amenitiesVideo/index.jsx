import React, { useRef } from 'react';
import { Container } from "./styles.jsx";
import { VideoJS } from "../../../atoms/index.jsx";
import { assets } from '../../../../assets/assetKeys';

function AmenitiesVideo() {
    const video = assets.amenities.vid["hero-video"];

    return (
        <Container >
            <VideoJS
                src={video.src}
                autoplay={true}
                muted={true}
                controls={false}
            />

        </Container >
    );
}

export default React.memo(AmenitiesVideo);
