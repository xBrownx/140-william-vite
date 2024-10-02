import React from 'react';
import { locationConst as CONST } from './constants'
import { PageTitle } from "../../molecules";
import { LocationCarousel } from "../../organisms";
import { Page } from "../../templates";
import { StyledColumn } from "./styles.jsx";

function Location({pageRef}) {
    return (
        <Page
            $pageRef={pageRef}
            $yEnd
        >
            <StyledColumn>
                <PageTitle
                    $row
                    $displayEnd
                    $paddingInline={160}
                >
                    {CONST.subheadingTxt}
                    {CONST.headingTxt}
                    {CONST.paragraphTxt}
                </PageTitle >
                <LocationCarousel />
            </StyledColumn >
        </Page >
    );
}


export default React.memo(Location);
