import { StyledParagraph } from './styles';
import React from 'react';

function Paragraph(props) {
    return (
        <StyledParagraph {...props}>
            {props.children}
        </StyledParagraph>
    );
}

export default React.memo(Paragraph);
