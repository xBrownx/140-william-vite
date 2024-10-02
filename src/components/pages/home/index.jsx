import { homeConst as CONST } from './constants'
import { Button, Column, Paragraph, Subheading } from "../../atoms";
import { ParallaxImg } from '../../molecules'
import { Page } from "../../templates";
import React from "react";
import {
    CustomButton,
    CustomParagraph,
    CustomSubheading,
    ImgWrapper,
    Pane,
    StyledColumn,
    StyledSplitScreen
} from "./styles.jsx";

function Home({pageRef, onDiscoverClick}) {
    const assets = CONST.assets
    return (
        <Page
            $pageRef={pageRef}
            $fullscreen
        >
            <StyledSplitScreen>
                <Pane id={'left-pane'} >
                    <ImgWrapper >
                        <ParallaxImg image={assets.hero} />
                    </ImgWrapper >
                </Pane >
                <Pane id={'right-pane'} >
                    <StyledColumn >
                        <CustomSubheading>
                            {CONST.headingTxt}
                        </CustomSubheading >
                        <CustomParagraph>
                            {CONST.paragraphTxt}
                        </CustomParagraph >
                        <CustomButton onClick={onDiscoverClick} >
                            {CONST.buttonTxt}
                        </CustomButton >
                    </StyledColumn >
                </Pane >
            </StyledSplitScreen >
        </Page >
    );
}


export default React.memo(Home);


