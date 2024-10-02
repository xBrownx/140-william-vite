import { storefrontURL } from "../../../utils/globals.jsx";
const srcURL = (filename) => storefrontURL + `/videos/hls/${filename}.m3u8`;

export const designConst = {
    subheadingTxt: "DESIGN",
    headingTxt: "A memorable\narrival experience",
    tour: {
        key: "tour",
        title: "START TOUR",
        videoSrc: srcURL("tour"),
        iconSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/play.svg"
    },
    menuItems: {
        "main-entry": {
            key: "main-entry",
            title: "MAIN ENTRY",
            videoSrc: srcURL("main-entry"),
            mapSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/design/entry.png"
        },
        "reception": {
            key: "reception",
            title: "RECEPTION",
            videoSrc: srcURL("reception"),
            mapSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/design/reception.png",
        },
        "lift-lobby": {
            key: "lift-lobby",
            title: "LIFT LOBBY",
            videoSrc: srcURL("lift-lobby"),
            mapSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/design/lift-lobby.png",
        },
        "lounge-lobby": {
            key: "lounge-lobby",
            title: "LOUNGE LOBBY",
            videoSrc: srcURL("lobby-lounge"),
            mapSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/design/lobby-lounge.png",
        },
        "work-lobby": {
            key: "work-lobby",
            title: "WORK LOBBY",
            videoSrc: srcURL("work-lobby"),
            mapSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/design/work-lounge.png",
        },
        "servery": {
            key: "servery",
            title: "SERVERY",
            videoSrc: srcURL("servery"),
            mapSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/design/servery.png",
        },
        "cafe-pavilion": {
            key: "cafe-pavilion",
            title: "CAFE PAVILION",
            videoSrc: srcURL("cafe-pavillion"),
            mapSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/design/cafe-pavilion.png",
        },
        "meeting-room": {
            key: "meeting-room",
            title: "MEETING ROOM",
            videoSrc: srcURL("meeting-room"),
            mapSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/design/meeting-room.png",
        },
        "courtyard": {
            key: "courtyard",
            title: "COURTYARD",
            videoSrc: srcURL("courtyard"),
            mapSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/design/courtyard.png",
        },
    },
}
