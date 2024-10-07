import React from "react";
import { CustomContainer } from "./styles.jsx";
import { VideoJS } from "../../../atoms/index.jsx";
import { assets } from '../../../../assets/assetKeys.jsx'

function HistoryVideo() {
    const videoSrc = assets.history.vid["hero-video"];
    const poster = assets.history.img["video-poster"];
    return (
        <CustomContainer>
            <VideoJS
                src={videoSrc.src}
                autoplay={false}
                muted={true}
                controls={true}
                poster={poster.src}
            />
        </CustomContainer>
    );
}

export default React.memo(HistoryVideo);
