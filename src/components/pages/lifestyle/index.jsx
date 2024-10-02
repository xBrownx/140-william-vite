import React from 'react';
import { lifestyleConst as CONST } from "./constants";
import { Heading, Subheading } from '../../atoms'
import { ScrollingCarousel } from "../../molecules";
import { LifestyleImages } from "../../organisms";
import { Page } from "../../templates";
import { CarouselContainer, StyledColumn, TitleContainer } from "./styles.jsx";
import IndentParagraph from "../../molecules/indentParagraph/index.jsx";


function Lifestyle() {

    return (
        <Page $fullscreen $endY >
            <StyledColumn >
                <TitleContainer >
                    <Subheading >
                        {CONST.subheadingTxt}
                    </Subheading >
                    <Heading >
                        {CONST.headingTxt}
                    </Heading >
                    <IndentParagraph >
                        {CONST.paragraphTxt}
                    </IndentParagraph >
                </TitleContainer >
                <CarouselContainer >
                    <ScrollingCarousel >
                        <LifestyleImages assets={CONST.assets} />
                    </ScrollingCarousel >
                </CarouselContainer >
            </StyledColumn >
        </Page >
    );
}


export default React.memo(Lifestyle);