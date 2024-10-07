import React from 'react';
import { availability as CONST } from "./constants";
import { assets } from '../../../assets/assetKeys'
import { BackgroundContainer, PageTitle } from "../../molecules";
import { AvailabilityOverlay, AvailabilityRating, ThirdSpaceCarousel, } from "../../organisms";
import { Page } from "../../templates";
import { useMobile } from "../../../hooks/index.jsx";
import AvailabilityMobile from "./availabilityMobile/index.jsx";
import { CarouselWrapper, ContentsContainer, ThirdSpaceContainer, Wrapper } from "./styles.jsx";
import { Column, Heading, Paragraph, Subheading } from "../../atoms/index.jsx";
import SlideUpAnim from "../../molecules/slideUpAnim/index.jsx";


function Availability({pageRef, setNavVis}) {
    const isMobile = useMobile();
    const backgroundImage = isMobile ? assets.availability.img["background-image-mobile"] : assets.availability.img["background-image"]
    return (
        <Page $pageRef={pageRef} >
            {isMobile && <PageContents />}
            <BackgroundContainer $src={backgroundImage.src} >
                {!isMobile && <AvailabilityOverlay />}
                {!isMobile && <PageContents />}
                {isMobile && <AvailabilityMobile setNavVis={setNavVis} />}
            </BackgroundContainer >

            <ThirdSpaceContainer >
                <PageTitle
                    $noPStyle
                    $paddingTop={47}
                    $paddingLeft={160}
                    $paddingBottom={16}
                >
                    {CONST.thirdSpaceSubheadingTxt}
                    {CONST.thirdSpaceHeadingTxt}
                </PageTitle >
                <CarouselWrapper >
                    <ThirdSpaceCarousel />
                </CarouselWrapper >
            </ThirdSpaceContainer >

        </Page >
    );
}

const PageContents = () => {
    const isMobile = useMobile();
    return (
        <Wrapper
            $paddingTop={47}
            $paddingInline={isMobile ? 16 : 64}

        >
            <Column $gap={isMobile ? 16 : 0} $paddingBottom={isMobile ? 48 : 0} >
                <div>
                    <Subheading $variant >
                        {CONST.subheadingTxt}
                    </Subheading >
                    <Heading $variant >
                        {isMobile ? CONST.headingTxtMobile : CONST.headingTxt}
                    </Heading >
                </div>
                <ContentsContainer >
                    <SlideUpAnim >
                        <Paragraph $variant >
                            {CONST.paragraphTxt}
                        </Paragraph >
                    </SlideUpAnim >
                    <AvailabilityRating assets={assets} />
                </ContentsContainer >
                {/*<PageTitle*/}
                {/*    $variant*/}
                {/*    $paddingTop={47}*/}
                {/*    $paddingLeft={isMobile ? 0 : 64}>*/}
                {/*    {CONST.subheadingTxt}*/}
                {/*    {isMobile ? CONST.headingTxtMobile : CONST.headingTxt}*/}
                {/*    {CONST.paragraphTxt}*/}
                {/*</PageTitle>*/}
            </Column >
        </Wrapper >
    );

}


export default React.memo(Availability);





