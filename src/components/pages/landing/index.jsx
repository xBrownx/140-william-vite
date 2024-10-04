import React, { useRef } from "react";
import { landing as CONST } from './constants';
import { ArrowButton, VideoJS } from '../../atoms';
import { Page } from "../../templates";
import { ArrowContainer, PageContainer } from "./styles.jsx";
import { assets } from '../../../assets/assetKeys';
import { LandingTitleAnimation } from "../../organisms/index.jsx";

function Landing({ pageRef, scrollTo, isLoading }) {
    const bgVideo = assets.landing.vid["background-video"];

    return (
        <Page
            $pageRef={pageRef}
            $fullscreen
        >
            <VideoJS src={bgVideo.src} />
            {!isLoading && <LandingTitleAnimation headings={CONST.heading} />}
            <ArrowContainer>
                <ArrowButton onClick={() => scrollTo("home")}/>
            </ArrowContainer>
        </Page>
    );
}

export default React.memo(Landing);
