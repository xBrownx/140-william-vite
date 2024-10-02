import React, { useRef, useState } from "react";
import { ButtonWrapper, StyledImg, StyledVideo } from "./styles";
import { Button, Container } from "../../atoms";


function HistoryVideo(props) {

    const assets = props.assets;
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = (isPlay) => {
        isPlay ? videoRef.current.play() : videoRef.current.pause();
        setIsPlaying(!isPlaying);
    }

    return (
        <Container
            $gridCentre
            $paddingInline={160}
            $paddingBlock={32}
            $overflowHidden
        >
            <StyledVideo ref={videoRef} $isVisible={isPlaying} loop muted controls={false} >
                <source src={assets.video.src} type="video/mp4" />
            </StyledVideo >
            <StyledImg $isVisible={!isPlaying} src={assets.placeholder.src} />
            <ButtonWrapper
                $isPlaying={isPlaying}
                $isVisible={!isPlaying}
            >
                <Button
                    $square
                    $secondary
                    onClick={() => handlePlay(!isPlaying)}
                >
                    {isPlaying ? "Pause" : "Play"}
                </Button >
            </ButtonWrapper >
        </Container >
    );
}

export default React.memo(HistoryVideo);
