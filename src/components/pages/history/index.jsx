import React from 'react';
import { historyConst as CONST } from './constants'
import { PageTitle } from "../../molecules";
import { HistoryVideo } from "../../organisms";
import { Page } from "../../templates";


function History({pageRef}) {
    return (
        <Page
            $pageRef={pageRef}
            $paddingBlock={90}
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
