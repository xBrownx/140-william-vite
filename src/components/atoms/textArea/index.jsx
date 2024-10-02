import { StyledTextArea } from "./styles";
import React from 'react';

function TextArea(props) {
    return <StyledTextArea {...props} />;
}

export default React.memo(TextArea);