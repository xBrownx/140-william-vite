import React from "react";
import { constants as CONST } from './constants.jsx'
import { Container } from "./styles.jsx";
import { LevelButtons, LevelVectors } from "../../../molecules/index.jsx";
import AvailabilityModal from "../availabilityModal/index.jsx";
import { AvailabilityProvider } from "./context.jsx";


function AvailabilityOverlay() {
        const buttons = CONST.buttons

        return (
            <AvailabilityProvider>
                <Container>
                    <AvailabilityModal
                        buttons={buttons}
                    />
                    <LevelButtons
                        buttons={buttons}
                    />
                    <LevelVectors />
                </Container>
            </AvailabilityProvider>
        );
    }

    export default React.memo(AvailabilityOverlay);