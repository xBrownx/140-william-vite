import React from 'react';
import { Container, StyledImage } from './styles';

function Image(props) {
    return (
        <Container
            $width={props.$width}
            $height={props.$height}
            {...props}
        >
            <StyledImage {...props} />
        </Container>
    )
}

export default React.memo(Image);
