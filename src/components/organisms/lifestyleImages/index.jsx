import React from 'react';
import { ImgContainer, StyledImg, Wrapper } from "./styles";

function LifestyleImages(props) {
    const images = props.assets.carousel;
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