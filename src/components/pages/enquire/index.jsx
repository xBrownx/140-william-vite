import React from 'react';
import { enquire as CONST } from "./constants";
import { ArrowButton, Container } from "../../atoms";
import { EnquireForm } from "../../organisms";
import { Page } from "../../templates";
import { CustomColumn, CustomContainer, CustomHeading } from "./styles.jsx";
import { useMobile } from "../../../hooks/index.jsx";


function Enquire({pageRef, scrollToTop}) {
    const isMobile = useMobile();
    return (
        <Page
            $bgSecondary
            $paddingTop={isMobile ? 64 : 70}
        >
            <CustomContainer ref={pageRef} >
                <CustomColumn >
                    <CustomHeading $secondary >
                        {CONST.headingTxt}
                    </CustomHeading >
                    <EnquireForm fields={CONST.fields} />
                </CustomColumn >
            </CustomContainer >
            {!isMobile && <Container
                $justifyEnd
                $widthPc={100}
                $height={64}
                $paddingRight={32}
                $marginBottom={213}
            >
                <ArrowButton
                    $rotate
                    onClick={scrollToTop}
                />
            </Container >}
        </Page >
    );
}


export default React.memo(Enquire);

