import { useRef, useState } from "react";
import './App.css';
import './index.css';
import Landing from "../components/pages/landing/index.jsx";
import Home from "../components/pages/home/index.jsx";
import Lifestyle from "../components/pages/lifestyle/index.jsx";
import Location from "../components/pages/location/index.jsx";
import Design from "../components/pages/design/index.jsx";
import { Footer, Header, ScrollingText } from "../components/organisms/index.jsx";
import { Hero } from "../components/templates/index.jsx";
import { constants as CONST } from "./constants.jsx";
import Amenities from "../components/pages/amenities/index.jsx";
import History from "../components/pages/history/index.jsx";
import Gallery from "../components/pages/gallery/index.jsx";
import Agency from "../components/pages/agency/index.jsx";
import Enquire from "../components/pages/enquire/index.jsx";
import Availability from "../components/pages/availabality/index.jsx";
import LoadingScreen from "../components/organisms/loadingScreen/index.jsx";

function App() {
    const [navBarVisible, setNavBarVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const pageRefs = {
        landing: useRef(),
        home: useRef(),
        location: useRef(),
        design: useRef(),
        amenities: useRef(),
        availability: useRef(),
        history: useRef(),
        agency: useRef(),
        enquire: useRef(),
    }

    const scrollTo = (page) => {
        setTimeout(() => {
            page.current.scrollIntoView({behavior: "smooth"})
        }, 100);
    }

    return (
        <>
            {isLoading && <LoadingScreen setLoading={setIsLoading} />}
            {navBarVisible && <Header pageRefs={pageRefs} scrollTo={scrollTo} />}
            <Landing pageRef={pageRefs.landing} scrollTo={() => scrollTo(pageRefs.home)} isLoading={isLoading} />
            {!isLoading && true &&
                <>
                    <Home pageRef={pageRefs.home} onDiscoverClick={() => scrollTo(pageRefs.availability)} />
                    <Hero src={CONST.heroOne} />
                    <Lifestyle />
                    <Location pageRef={pageRefs.location} />
                    <Hero $bgSecondary src={CONST.heroTwo} />
                    <Design pageRef={pageRefs.design} />
                    <Amenities pageRef={pageRefs.amenities} />
                    <Availability pageRef={pageRefs.availability} setNavVis={setNavBarVisible} />
                    <ScrollingText />
                    <History pageRef={pageRefs.history} />
                    <Gallery />
                    <Agency pageRef={pageRefs.agency} />
                    <Hero $bgSecondary src={CONST.heroThree} />
                    <Enquire pageRef={pageRefs.enquire} scrollToTop={() => scrollTo(pageRefs.landing)} />
                    <Footer />
                </>
            }
        </ >
    )
}

export default App
