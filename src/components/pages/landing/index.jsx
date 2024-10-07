import React, { useRef } from "react";
import { landing as CONST } from './constants';
import { ArrowButton, VideoJS } from '../../atoms';
import { Page } from "../../templates";
import { ArrowContainer, PageContainer } from "./styles.jsx";
import { assets } from '../../../assets/assetKeys';
import { LandingTitleAnimation } from "../../organisms/index.jsx";
import { useMobile } from "../../../hooks/index.jsx";

function Landing({pageRef, scrollTo, isLoading}) {
    const bgVideo = assets.landing.vid["background-video"];
    const isMobile = useMobile();
    return (
        <Page
            $pageRef={pageRef}
            $fullscreen

        >
            <div style={{height: "100vh", minHeight: "100vh"}} >
                <VideoJS src={bgVideo.src} />
                {!isLoading && <LandingTitleAnimation headings={CONST.heading} />}
                <ArrowContainer >
                    {!isLoading &&  <ArrowButton onClick={() => scrollTo("home")} />}
                </ArrowContainer >
            </div >
        </Page >
    );
}

export default React.memo(Landing);
