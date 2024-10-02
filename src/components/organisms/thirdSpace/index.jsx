import React from 'react';
import { CarouselWrapper, Container } from './styles';
import { constants as CONST } from "./constants";
import { PageTitle, SlideCarousel } from "../../molecules";

function ThirdSpace(props) {
    return (
        <Container {...props}>
            <PageTitle
                $noPStyle
                $paddingTop={47}
                $paddingLeft={160}
                $paddingBottom={16}
            >
                {CONST.subheadingTxt}
                {CONST.headingTxt}
            </PageTitle>
            <CarouselWrapper>
                <SlideCarousel images={CONST.carousel} />
            </CarouselWrapper>

        </Container>
    );
}


export default React.memo(ThirdSpace);
