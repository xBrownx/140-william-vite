import styled from 'styled-components';
import { screen as SCREEN, media as MEDIA } from '../../../../utils/index.jsx';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const CarouselWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    
    img {
        object-fit: cover;
        object-position: center center;
        width: 100%;
        height: 100%;
    }
`