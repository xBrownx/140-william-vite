import React, { useRef } from "react";
import { landing as CONST } from './constants';
import { ArrowButton, VideoJS } from '../../atoms';
import { BackgroundVideo } from "../../molecules";
import { Page } from "../../templates";
import { ArrowContainer, PageContainer } from "./styles.jsx";

const DIST_NAME = "https://d3tbbjv3fiiqdd.cloudfront.net/videos/hls/landing-3sec-500kb.m3u8"
function Landing({ pageRef, scrollTo }) {

    const playerRef = useRef(null);

    const videoOptions = {
        autoplay: true,
        controls: false,
        loop: true,
        muted: true,
        fluid: true,
        preload: 'auto',
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
                <VideoJS
                    options={videoOptions}
                    onReady={handlePlayerReady}
                />
            </div>
        </Page>
    )
}

export default React.memo(Landing);