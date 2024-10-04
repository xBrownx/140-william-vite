import React from "react";
import { constants as CONST } from './constants'
import { Container } from "./styles";
import { LevelButtons, LevelVectors } from "../../molecules";
import AvailabilityModal from "../availabilityModal";
import { AvailabilityProvider } from "./context";


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