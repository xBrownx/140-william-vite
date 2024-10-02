import React from 'react';
import { agencyConst as CONST } from './constants'
import { Image } from '../../atoms'
import { Agent } from '../../molecules'
import { Page, SplitScreen } from "../../templates";
import {
    ContentContainer,
    ImgWrapper,
    RightHandPane,
    StyledHeading,
    StyledParagraph, StyledSubheading,
    StyledUl,
    SubheadingWrapper
} from "./styles.jsx";

const heroImg = CONST.assets.hero;
const knightFrankAgency = CONST.agencies.knightFrank;
const colliersAgency = CONST.agencies.colliers;
const agentAssets = CONST.assets.agents;
const OpenIcon = CONST.assets.icons.open.src;


function Agency({pageRef}) {

    return (
        <Page
            $bgSecondary
            $paddingInline={160}
            $paddingBlock={190}
        >
            <SplitScreen
                $pageRef={pageRef}
                $height={815}
            >
                <ImgWrapper >
                    <Image src={heroImg.src} width={heroImg.width} height={heroImg.height} />
                </ImgWrapper >
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
            </SplitScreen >

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
            <Image src={OpenIcon} />
        </SubheadingWrapper >
    );
}



export default React.memo(Agency);




