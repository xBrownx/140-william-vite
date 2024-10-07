import React from 'react';
import { historyConst as CONST } from './constants'
import { PageTitle } from "../../molecules";
import { HistoryVideo } from "../../organisms";
import { Page } from "../../templates";
import { useMobile } from "../../../hooks/index.jsx";


function History({pageRef}) {
    const isMobile = useMobile();
    return (
        <Page
            $pageRef={pageRef}
            $paddingBlock={isMobile ? 64 : 90}
        >
            <PageTitle
                $row
                $displayEnd
                $paddingInline={160}
            >
                {CONST.subheadingTxt}
                {CONST.headingTxt}
                {CONST.paragraphTxt}
            </PageTitle >
            <HistoryVideo assets={CONST.assets} />
        </Page >
    );
}


export default React.memo(History);
