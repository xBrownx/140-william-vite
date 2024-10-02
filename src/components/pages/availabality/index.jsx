import React from 'react';
import { availability as CONST } from "./constants";
import { BackgroundContainer, PageTitle } from "../../molecules";
import { AvailabilityOverlay, AvailabilityRating, ThirdSpace } from "../../organisms";
import { Page } from "../../templates";
import { useMobile } from "../../../hooks/index.jsx";
import AvailabilityMobile from "../../organisms/availabilityMobile/index.jsx";


function Availability({pageRef, setNavVis}) {
    const isMobile = useMobile();

    return (
        <Page $pageRef={pageRef} >
            {isMobile && <PageContents /> }
            <BackgroundContainer src={CONST.assets.bgImg.src} >
                {!isMobile && <AvailabilityOverlay
                    buttons={CONST.buttons}
                    assets={CONST.assets}
                />}
                {!isMobile && <PageContents /> }
                {isMobile && <AvailabilityMobile setNavVis={setNavVis} /> }
            </BackgroundContainer >
            <ThirdSpace />
        </Page >
    );
}

const PageContents = () => {
    const isMobile = useMobile();
    return (
        <>
            <PageTitle
                $variant
                $noPStyle
                $paddingTop={47}
                $paddingLeft={isMobile ? 0 : 64} >
                {CONST.subheadingTxt}
                {isMobile ? CONST.headingTxtMobile : CONST.headingTxt}
                {CONST.paragraphTxt}
            </PageTitle >
            <AvailabilityRating assets={CONST.assets} />
        </>
    );

}


export default React.memo(Availability);





