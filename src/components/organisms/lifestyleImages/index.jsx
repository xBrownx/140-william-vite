import React from 'react';
import { ImgContainer, StyledImg, Wrapper } from "./styles";
import { assets } from '../../../assets/assetKeys'

function LifestyleImages() {
    const images = assets.lifestyle.img.carousel;
    return (
        <Wrapper >
            {
                images.map((image) => {
                    return (
                        <ImgContainer key={image.key} >
                            <StyledImg src={image.src} />
                        </ImgContainer >
                    );
                })
            }
        </Wrapper >
    );
}

export default React.memo(LifestyleImages);