import React from "react";
import { landing as CONST } from './constants';
import { ArrowButton } from '../../atoms';
import { BackgroundVideo } from "../../molecules";
import { Page } from "../../templates";
import { ArrowContainer, PageContainer } from "./styles.jsx";

function Landing({pageRef, scrollTo}) {
            return (
                <Page
                    $pageRef={pageRef}
                    $fullscreen
                >
                    <PageContainer >
                        <BackgroundVideo
                            headings={CONST.heading}
                            src={CONST.assets.video.src}
                        />
                        <ArrowContainer >
                            <ArrowButton onClick={scrollTo} />
                        </ArrowContainer>
                    </PageContainer>
                </Page>
            )
        }

export default React.memo(Landing);