import React, { memo } from 'react'
import Styled from './styles';

export const PageSubtitle = memo(
    function PageSubtitle(props) {
        return (
            <Styled {...props}>
                {props.children}
            </Styled >
        );
    }
);