import React, { useRef } from 'react';
import { Container, StyledVideo } from "./styles";

function AmenitiesVideo(props) {
    const videoRef = useRef(null);

    return (
        <Container >
            <StyledVideo autoPlay loop muted controls={false} ref={videoRef} >
                <source src={props.src} type="video/mp4" />
            </StyledVideo >
        </Container >
    );
}

export default React.memo(AmenitiesVideo);
