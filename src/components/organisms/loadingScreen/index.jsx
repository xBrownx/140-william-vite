import { memo, useEffect, useRef, useState } from 'react';
import {
    Container,
    HeadingWrapper,
    ImageWrapper,
    ProgressBar,
    StyledP,
    TextWrapper,
    Wrapper
} from './styles';
import logo from '../../../assets/large-logo.png';
import logoText from '../../../assets/logo_text isolated.svg'

function LoadingScreen(props) {
    const [progress, setProgress] = useState(0);
    const [startTransition, setStartTransition] = useState(false);

    const endTransition = () => {
        setTimeout(() => setStartTransition(true), 1000);
        setTimeout(() => props.setLoading(false), 3500);
    }

    useEffect(() => {
        let x = 0;
        const interval = setInterval(() => {
            setProgress(prevState => {
                x = prevState + 25;
                if (x >= 100) {
                    x = 100;
                    endTransition();
                    clearInterval(interval);
                }
                return x;
            });

        }, 800);
        return () => clearInterval(interval);
    })

    return (

        <div
            style={{zIndex: 1000, position: "absolute", width: "100vw", height: "100%"}}
        >
            <Container $startTransition={startTransition} >
                <Wrapper>
                    <ImageWrapper $startTransition={startTransition}>
                        <img src={logo} alt={""} />
                    </ImageWrapper >
                    <HeadingWrapper $startTransition={startTransition}>
                        <img src={logoText} alt={""} />
                    </HeadingWrapper >
                </Wrapper >
                <Wrapper >
                    <ProgressBar $startTransition={startTransition} id="progress-bar" value={progress} max={100} />
                    <TextWrapper >
                        <StyledP id="progress-text" $startTransition={startTransition} >
                            {progress}%
                        </StyledP >
                    </TextWrapper >
                </Wrapper >


            </Container >
        </div >

    );
}


export default memo(LoadingScreen);
