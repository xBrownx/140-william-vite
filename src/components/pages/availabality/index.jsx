import React from 'react';
import { availability as CONST } from "./constants";
import { assets } from '../../../assets/assetKeys'
import { BackgroundContainer, PageTitle } from "../../molecules";
import { AvailabilityOverlay, AvailabilityRating, ThirdSpaceCarousel, } from "../../organisms";
import { Page } from "../../templates";
import { useMobile } from "../../../hooks/index.jsx";
import AvailabilityMobile from "../../organisms/availabilityMobile/index.jsx";
import { CarouselWrapper, ThirdSpaceContainer } from "./styles.jsx";


function Availability({ pageRef, setNavVis }) {
    const isMobile = useMobile();
    const backgroundImage = assets.availability.img["background-image"]
    return (
        <Page $pageRef={pageRef}>
            {isMobile && <PageContents />}
            <BackgroundContainer $src={backgroundImage.src}>
                {!isMobile && <AvailabilityOverlay />}
                {!isMobile && <PageContents />}
                {isMobile && <AvailabilityMobile setNavVis={setNavVis} />}
            </BackgroundContainer>

            <ThirdSpaceContainer>
                <PageTitle
                    $noPStyle
                    $paddingTop={47}
                    $paddingLeft={160}
                    $paddingBottom={16}
                >
                    {CONST.thirdSpaceSubheadingTxt}
                    {CONST.thirdSpaceHeadingTxt}
                </PageTitle>
                <CarouselWrapper>
                    <ThirdSpaceCarousel />
                </CarouselWrapper>
            </ThirdSpaceContainer>

        </Page>
    );
}

const PageContents = () => {
    const isMobile = useMobile();
    return (
        <>
            <PageTitle
                $variant
                $paddingTop={47}
                $paddingLeft={isMobile ? 0 : 64}>
                {CONST.subheadingTxt}
                {isMobile ? CONST.headingTxtMobile : CONST.headingTxt}
                {CONST.paragraphTxt}
            </PageTitle>
            <AvailabilityRating assets={assets} />
        </>
    );

}


export default React.memo(Availability);





