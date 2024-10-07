import React from 'react';
import { ImgContainer, StyledImg, Wrapper } from "./styles.jsx";
import { assets } from '../../../../assets/assetKeys.jsx'

function LifestyleImages() {
    const images = assets.lifestyle.img.carousel;
    return (
        <Wrapper >
            {
                images.map((image, idx) => {
                    return (
                        <ImgContainer key={idx} >
                            <StyledImg src={image.src} />
                        </ImgContainer >
                    );
                })
            }
        </Wrapper >
    );
}

export default React.memo(LifestyleImages);