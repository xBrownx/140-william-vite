import React, { useRef } from "react";
import { landing as CONST } from './constants';
import { ArrowButton, VideoJS } from '../../atoms';
import { BackgroundVideo } from "../../molecules";
import { Page } from "../../templates";
import { ArrowContainer, PageContainer } from "./styles.jsx";
import { assets } from '../../../assets/assetKeys';

function Landing({ pageRef, scrollTo }) {
    const bgVideo = assets.landing.vid["background-video"];

    return (
        <Page
            $pageRef={pageRef}
            $fullscreen
        >
            <div>
                <VideoJS src={bgVideo.src} />
            </div>
        </Page>
    );
}

export default React.memo(Landing);
