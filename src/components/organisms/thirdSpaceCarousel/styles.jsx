import styled from 'styled-components';
import { screen as STYLE } from '../../../utils';

export const Container = styled.div`
    width: 100%;
`

export const CarouselWrapper = styled.div`
    img {
        object-fit: cover;
        object-position: center center;
        width: 100%;
        height: 100%;
    }
`