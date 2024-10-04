import React from "react";
import { ButtonWrapper } from "./styles";
import { Button, Container, VideoJS } from "../../atoms";
import { assets } from '../../../assets/assetKeys'

function HistoryVideo() {
    const videoSrc = assets.history.vid["hero-video"];
    const poster = assets.history.img["video-poster"];

    return (
        <Container
            $gridCentre
            $paddingInline={160}
            $paddingBlock={32}
            $overflowHidden
        >
            <VideoJS
                src={videoSrc.src}
                autoplay={false}
                muted={true}
                controls={true}
                poster={poster.src}
            />

        </Container>
    );
}

export default React.memo(HistoryVideo);
