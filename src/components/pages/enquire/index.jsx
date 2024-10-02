import React from 'react';
import { enquire as CONST } from "./constants";
import { ArrowButton, Column, Container, Heading } from "../../atoms";
import { EnquireForm } from "../../organisms";
import { Page } from "../../templates";


function Enquire({pageRef, scrollToTop}) {
            return (
                <Page
                    $bgSecondary
                    $paddingTop={70}
                >
                    <Container
                        $pageRef={pageRef}
                        $flexColumn
                        $alignCentre
                        $overflowHidden
                        $borderBox
                        $paddingTop={70}
                        $marginBottom={140}
                    >
                        <Column $gap={32} $centreX>
                            <Heading $secondary>
                                {CONST.headingTxt}
                            </Heading>
                            <EnquireForm fields={CONST.fields}/>
                        </Column>
                    </Container>
                    <Container
                        $justifyEnd
                        $widthPc={100}
                        $height={64}
                        $paddingRight={32}
                        $marginBottom={213}
                    >
                        <ArrowButton
                            $rotate
                            $fitContent
                            onClick={scrollToTop}
                        />
                    </Container>
                </Page>
            );
        }


export default React.memo(Enquire);

