import styled, { css } from "styled-components";
import { screen as SCREEN, media as MEDIA } from '../../../utils';

export const VideoContainer = styled.div`
    height: 100%;
    width: 100%;
`

export const VideoWrapper = styled.div`
    width: 100%;
    height: 100%;
    
    img {
        object-fit: cover;
    }
    
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    video-js {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
    
    
    


`