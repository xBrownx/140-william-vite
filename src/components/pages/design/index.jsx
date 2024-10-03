import React from 'react';
import { designConst as CONST } from './constants'
import { PageTitle } from "../../molecules";
import { DesignVideo, MobileDesignVideo } from "../../organisms";
import { Page } from "../../templates";
import { CustomContainer } from "./styles.jsx";
import { useMobile } from "../../../hooks/index.jsx";

function Design({pageRef}) {
    const isMobile = useMobile();
    return (
        <Page
            $pageRef={pageRef}
            $bgSecondary
            $fitContent
            style={{overflow: "unset", boxSizing: "unset", height: "unset"}}
        >
            <CustomContainer >
                <PageTitle
                    $secondary
                    $paddingInline={160}
                >
                    {CONST.subheadingTxt}
                    {CONST.headingTxt}
                </PageTitle >
                { isMobile ? <MobileDesignVideo /> : <DesignVideo /> }
            </CustomContainer >
        </Page >
    );
}

export default React.memo(Design);

