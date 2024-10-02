import React, { useRef } from "react";
import { landing as CONST } from './constants';
import { ArrowButton, VideoJS } from '../../atoms';
import { BackgroundVideo } from "../../molecules";
import { Page } from "../../templates";
import { ArrowContainer, PageContainer } from "./styles.jsx";

const DIST_NAME = "https://d3tbbjv3fiiqdd.cloudfront.net/videos/hls/landing-3sec-500kb.m3u8"
function Landing({ pageRef, scrollTo }) {
    return (
        <Page
            $pageRef={pageRef}
            $fullscreen
        >
            <div>
                <VideoJS src={DIST_NAME} />
            </div>
        </Page>
    );
}

export default React.memo(Landing);
