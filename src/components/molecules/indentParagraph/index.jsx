import { Wrapper } from './styles'
import { Paragraph } from '../../atoms'
import SlideUpAnim from "../slideUpAnim";
import React from "react";

function IndentParagraph(props) {
    return (
        <Wrapper {...props}>
            <SlideUpAnim >
                <Paragraph {...props}>
                    {props.children}
                </Paragraph >
            </SlideUpAnim >
        </Wrapper >
    );
}

export default React.memo(IndentParagraph);
