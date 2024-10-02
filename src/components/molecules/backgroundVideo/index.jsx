import React, { useEffect, useRef } from "react";
import { Container, StyledHeading, StyledVideo, Wrapper } from "./styles";

function BackgroundVideo(props) {
    const videoRef = useRef(null);


    useEffect(() => {
        let options = {
            rootMargin: "0px",
            threshold: [0.25, 0.75]
        };

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
    });
    return (
        <Container>
            <Wrapper >
                {props.headings.map((item, index) => {
                    return (
                        <StyledHeading key={index} $justify={item.justify}>
                            {item.title}
                        </StyledHeading>
                    );
                })}
            </Wrapper >
            <StyledVideo

                controls={false}
                ref={videoRef}
                class="video-js"
                preload="auto"
                data-setup="{}"
            >
                <source
                    src={"https://d3tbbjv3fiiqdd.cloudfront.net/videos/hls/rendered.m3u8"}
                    type="application/x-mpegURL"
                />
            </StyledVideo>
        </Container>
    );
}

export default React.memo(BackgroundVideo);
