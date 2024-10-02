import { useRef, useState } from "react";
import './App.css'
import Landing from "../pages/landing";
import Home from "../pages/Home";
import Lifestyle from "../pages/lifestyle";
import Location from "../pages/location";
import Design from "../pages/design";
import { Footer, Header, ScrollingText } from "../organisms";
import { Hero } from "../templates";
import { constants as CONST } from "./constants";
import Amenities from "../pages/amenities/index.jsx";
import History from "../pages/history/index.jsx";
import Gallery from "../pages/gallery/index.jsx";
import Agency from "../pages/agency/index.jsx";
import Enquire from "../pages/enquire/index.jsx";
import Availability from "../pages/availabality";
import { MotionGlobalConfig } from "framer-motion"

function App() {
    const [navBarVisible, setNavBarVisible] = useState(true);


    MotionGlobalConfig.skipAnimations = true
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
            {navBarVisible && <Header pageRefs={pageRefs} scrollTo={scrollTo} />  }
            <Landing pageRef={pageRefs.landing} scrollTo={() => scrollTo(pageRefs.home)} />
            <Home pageRef={pageRefs.home} onDiscoverClick={() => scrollTo(pageRefs.availability)}/>
            <Hero src={CONST.heroOne} />
            <Lifestyle />
            <Location pageRef={pageRefs.location}/>
            <Hero $bgSecondary src={CONST.heroTwo} />
            <Design pageRef={pageRefs.design} />
            <Amenities pageRef={pageRefs.amenities} />
            <Availability pageRef={pageRefs.availability} setNavVis={setNavBarVisible} />
            <ScrollingText />
            <History pageRef={pageRefs.history}/>
            <Gallery />
            <Hero $bgSecondary src={CONST.heroThree} />
            <Agency pageRef={pageRefs.agency} />
            <Hero $bgSecondary src={CONST.heroThree} />
            <Enquire pageRef={pageRefs.enquire} scrollToTop={() => scrollTo(pageRefs.landing)}/>
            <Footer />
        </>
    )
}

export default App
