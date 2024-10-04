import React from 'react';
import { CarouselWrapper, Container } from './styles';
import { assets } from '../../../assets/assetKeys';
import { SlideCarousel } from "../../molecules";

function ThirdSpaceCarousel(props) {
    const carousel = assets.availability.img["third-space"];
    return (
        <Container {...props}>
            <CarouselWrapper>
                <SlideCarousel images={carousel} rounded={true}/>
            </CarouselWrapper>
        </Container>
    );
}


export default React.memo(ThirdSpaceCarousel);
