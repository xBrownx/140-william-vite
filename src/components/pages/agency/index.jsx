import React from 'react';
import { agencyConst as CONST } from './constants'
import { Image } from '../../atoms'
import { Agent } from '../../molecules'
import { Page, SplitScreen } from "../../templates";
import {
    ContentContainer, CustomImage, CustomImageWrapper, CustomSplitScreen,
    ImgWrapper, Pane,
    RightHandPane,
    StyledHeading,
    StyledParagraph, StyledSubheading,
    StyledUl,
    SubheadingWrapper
} from "./styles.jsx";
import { assets } from "../../../assets/assetKeys.jsx";
import { useMobile } from "../../../hooks/index.jsx";

const knightFrankAgency = CONST.agencies.knightFrank;
const colliersAgency = CONST.agencies.colliers;
const agentAssets = CONST.assets.agents;
const OpenIcon = CONST.assets.icons.open.src;


function Agency({pageRef}) {
    const heroImg = assets.agency.img["hero"];
    const isMobile = useMobile();
    return (
        <Page
            $bgSecondary
            $paddingInline={isMobile ? 0 : 160}
            $paddingBlock={isMobile ? 0 : 190}
        >
            <CustomSplitScreen
                ref={pageRef}
                $height={815}
            >
                <Pane id={'left-pane'} >
                    <CustomImageWrapper {...heroImg}>
                        <CustomImage
                            src={heroImg.src}
                            width={544}
                            height={815} />
                    </CustomImageWrapper >
                </Pane >
                <Pane id={'right-pane'} >
                    <RightHandPane >
                        <StyledHeading >
                            {CONST.headingTxt}
                        </StyledHeading >
                        <ContentContainer >
                            <StyledParagraph >
                                {CONST.paragraphTxt}
                            </StyledParagraph >

                            <SubHeading
                                title={colliersAgency.label}
                                link={colliersAgency.link}
                            />
                            <StyledUl >
                                {colliersAgency.agents.map((agent, i) => (
                                    <Agent
                                        key={agent.key}
                                        agent={agent}
                                        img={agentAssets[agent.key]}
                                    />
                                ))}
                            </StyledUl >
                            <SubHeading
                                title={knightFrankAgency.label}
                                link={knightFrankAgency.link}
                            />
                            <StyledUl >
                                {knightFrankAgency.agents.map((agent, i) => (
                                    <Agent
                                        key={agent.key}
                                        agent={agent}
                                        img={agentAssets[agent.key]}
                                    />
                                ))}
                            </StyledUl >
                        </ContentContainer >
                    </RightHandPane >
                </Pane >
            </CustomSplitScreen >

        </Page >
    );
}


const SubHeading = ({title, link}) => {

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <SubheadingWrapper onClick={() => openInNewTab(link)} >
            <StyledSubheading >{title}</StyledSubheading >
        </SubheadingWrapper >
    );
}


export default React.memo(Agency);




