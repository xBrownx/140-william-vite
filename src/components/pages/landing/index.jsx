import React, { useRef } from "react";
import { landing as CONST } from './constants';
import { ArrowButton } from '../../atoms';
import { BackgroundVideo } from "../../molecules";
import { Page } from "../../templates";
import { ArrowContainer, PageContainer } from "./styles.jsx";
import VideoJS from "../../molecules/backgroundVideo/videoJS.jsx";

const DIST_NAME = "https://d3tbbjv3fiiqdd.cloudfront.net/videos/hls/backgroundoutput.m3u8"
function Landing({ pageRef, scrollTo }) {

    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: false,
        muted: true,
        fluid: true,
        sources: [{
            src: DIST_NAME,
            type: 'application/x-mpegURL'
        }],
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    return (
        <Page
            $pageRef={pageRef}
            $fullscreen
        >
            <div>
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
        </Page>
    )
}

export default React.memo(Landing);