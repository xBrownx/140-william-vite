import React from 'react';
import { CarouselWrapper, Container } from './styles.jsx';
import { assets } from '../../../../assets/assetKeys.jsx';
import { SlideCarousel } from "../../../molecules/index.jsx";

function ThirdSpaceCarousel(props) {
    const carousel = assets.availability.img["third-space"];
    return (
        <Container id={"third-space-container"} {...props}>
            <CarouselWrapper id={"third-space-wrapper"} >
                <SlideCarousel images={carousel} rounded={true}/>
            </CarouselWrapper>
        </Container>
    );
}


export default React.memo(ThirdSpaceCarousel);
