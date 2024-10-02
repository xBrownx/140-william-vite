import React from 'react';
import { amenitiesConst as CONST } from './constants'
import { Column, Container } from '../../atoms';
import { PageTitle } from "../../molecules";
import { AmenitiesList, AmenitiesVideo } from '../../organisms';
import { Page } from "../../templates";
import { CustomSplitScreen, Pane, VideoContainer } from "./styles.jsx";

function Amenities({pageRef}) {
    return (
        <Page $bgSecondary>
            <CustomSplitScreen ref={pageRef} >
                <Pane >
                    <Container >
                        <Column >
                            <PageTitle $secondary >
                                {CONST.subheadingTxt}
                                {CONST.headingTxt}
                            </PageTitle >
                            <AmenitiesList />
                        </Column >
                    </Container >
                </Pane >
                <Pane >
                    <VideoContainer >
                        <AmenitiesVideo src={CONST.assets.video.src} />
                    </VideoContainer >
                </Pane >
            </CustomSplitScreen >
        </Page >

    );
}


export default React.memo(Amenities);





