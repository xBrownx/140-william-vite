import styled from 'styled-components';
import { screen as STYLE } from '../../../utils';

export const Container = styled.div`
    width: 100%;
    padding-block: ${STYLE.height(64)};
`

export const CarouselWrapper = styled.div`
    padding-inline: ${STYLE.width(64)};
    
    img {
        object-fit: cover;
        object-position: center center;
        width: ${STYLE.width(1312)};
        height: ${STYLE.height(737)};
    }
`