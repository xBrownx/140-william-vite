export const agencyConst = {
    headingTxt: "Agencies",
    paragraphTxt: "If you'd like to inspect this property in person, please\n" +
        "contact your preferred agent for further info or to arrange\n" +
        "a private inspection.",
    agencies: {
        knightFrank: {
            label: "KNIGHT FRANK",
            link: "https://www.knightfrank.com.au/contact/melbourne",
            agents: [
                {
                    key: "jamPap",
                    name: "JAMES PAPPAS",
                    phone: "+61 419 319 367",
                    email: "james.pappas@au.knightfrank.com",
                },
                {
                    key: "hamSut",
                    name: "HAMISH SUTHERLAND",
                    phone: "+61 439 033 612",
                    email: "hamish.sutherland@au.knightfrank.com",
                },
            ],
        },
        colliers: {
            label: "COLLIERS",
            link: "https://www.colliers.com.au/en-au",
            agents: [
                {
                    key: "geoMur",
                    name: "GEORGINA MURRAY",
                    phone: "+61 412 232 030",
                    email: "georgina.murray@colliers.com",
                },
                {
                    key: "micDar",
                    name: "MICHAEL DARVELL",
                    phone: "+61 401 033 303",
                    email: "michael.darvell@colliers.com",
                },
                {
                    key: "shaBur",
                    name: "SHANE BURNS",
                    phone: "+61 439 035 002",
                    email: "shane.burns@colliers.com",
                }
            ],
        },
    },
    assets: {
        hero: {
            key: "hero",
            src: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/hero.jpg",
            role: "presentation",
            width: 544,
            height: 815,
            lazy: false,
        },
        agents: {
            jamPap: {
                key: "jamPap",
                src: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/Agency-James-Pappas.svg",
                alt: "James Pappas",
                width: 80,
                height: 80,
                lazy: false,
            },
            hamSut: {
                key: "hamSut",
                src: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/Agency-Hamish-Sutherland.svg",
                alt: "Hamish Sutherland",
                width: 80,
                height: 80,
                lazy: false,
            },
            geoMur: {
                key: "geoMur",
                src: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/Agency-Georgina-Murray.svg",
                alt: "Georgina Murray",
                width: 80,
                height: 80,
                lazy: false,
            },
            micDar: {
                key: "micDar",
                src: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/Agency-Michael-Darvell.svg",
                alt: "Michael Darvell",
                width: 80,
                height: 80,
                lazy: false,
            },
            shaBur: {
                key: "shaBur",
                src: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/Agency-Shane-Burns.svg",
                alt: "Shane Burns",
                width: 80,
                height: 80,
                lazy: false,
            },
        },
        icons: {
            open: {
                key: "open",
                src: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/open.svg",
                alt: "Open",
                width: 24,
                height: 24,
                lazy: false,
            }
        }
    }
}
