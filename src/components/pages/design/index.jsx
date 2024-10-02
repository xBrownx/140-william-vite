import React from 'react';
import { designConst as CONST } from './constants'
import { PageTitle } from "../../molecules";
import { DesignVideo } from "../../organisms";
import { Page } from "../../templates";
import { CustomContainer } from "./styles.jsx";

function Design({pageRef}) {
    return (
        <Page
            $pageRef={pageRef}
            $bgSecondary
        >
            <CustomContainer >
                <PageTitle
                    $secondary
                    $paddingInline={{inline: 160}}
                >
                    {CONST.subheadingTxt}
                    {CONST.headingTxt}
                </PageTitle >
                <DesignVideo
                    tour={CONST.tour}
                    menuItems={CONST.menuItems}
                />
            </CustomContainer >
        </Page >
    );
}

export default React.memo(Design);

