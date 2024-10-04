export const storefrontURL = "https://d3tbbjv3fiiqdd.cloudfront.net";
export const iconCDN = (file, ext="svg") => `${storefrontURL}/icons/${file}.${ext}`;
export const imageCDN = (featurePath, file, ext) => `${storefrontURL}/images/${featurePath}/${file}.${ext}`;
export const videoCDN = (featurePath, file) => `${storefrontURL}/videos/${featurePath}/${file}.m3u8`;

export const assets = {
    header: {
        img: {
            "client-logo": {
                src: imageCDN(),
                alt: "business-logo",
            }
        },
        icon: {
            "mobile-menu": {
                src: iconCDN(),
                alt: "menu-icon"
            }
        }
    },
    landing: {
        vid: {
            "background-video": {
                src: videoCDN("landing", "background-output"),
                autoplay: true,
                controls: false,
                muted: true,
            },
        },
    },
    home: {
        img: {
            "hero": {
                src: imageCDN("home", "home-hero-optimised", "jpg"),
                alt: "Home Hero",
            }
        }
    },
    lifestyle: {
        img: {
            "carousel": [
                {
                    src: imageCDN("lifestyle", "Lifestyle-Carousel-1", "png"),
                    alt: "",
                },
                {
                    src: imageCDN("lifestyle", "Lifestyle-Carousel-2", "png"),
                    alt: "",
                },
                {
                    src: imageCDN("lifestyle", "Lifestyle-Carousel-3", "png"),
                    alt: "",
                },
                {
                    src: imageCDN("lifestyle", "Lifestyle-Carousel-4", "png"),
                    alt: "",
                },
                {
                    src: imageCDN("lifestyle", "Lifestyle-Carousel-5", "png"),
                    alt: "",
                },
                {
                    src: imageCDN("lifestyle", "Lifestyle-Carousel-6", "png"),
                    alt: "",
                },
                {
                    src: imageCDN("lifestyle", "Lifestyle-Carousel-7", "png"),
                    alt: "",
                },
                {
                    src: imageCDN("lifestyle", "Lifestyle-Carousel-8", "png"),
                    alt: "",
                }
            ]
        }
    },
    location: {
        img: {
            "fnb": {
                src: imageCDN("location", "fnb", "svg"),
                alt: "nearby-food-and-beverage"
            },
            "retail": {
                src: imageCDN("location", "retail", "svg"),
                alt: "nearby-retail"
            },
            "trains": {
                src: imageCDN("location", "trains", "svg"),
                alt: "nearby-trains"
            },
            "hotels": {
                src: imageCDN("location", "hotels", "svg"),
                alt: "nearby-hotels"
            },
        },
        icon: {
            "fnb": {
                src: iconCDN("Location-01-FB"),
            },
            "retail": {
                src: iconCDN("Location-02-Retail"),
            },
            "trains": {
                src: iconCDN("Location-03-Trains"),
            },
            "hotels": {
                src: iconCDN("Location-04-Hotels"),
            },
        }
    },
    design: {
        vid: {
            "tour": {
                src: videoCDN("design/tour", "tour-output"),
                controls: true,
            },
            "main-entry": {
                src: videoCDN("design/main-entry", "main-entry-output"),
                controls: false,
            },
            "reception": {
                src: videoCDN("design/reception", "reception-output"),
                controls: false,
            },
            "lift-lobby": {
                src: videoCDN("design/lift-lobby", "lift-lobby"),
                controls: false,
            },
            "lounge-lobby": {
                src: videoCDN("design/lounge-lobby", "lounge-lobby-output"),
                controls: false,
            },
            "work-lobby": {
                src: videoCDN("design/work-lobby", "work-lobby-output"),
            },
            "servery": {
                src: videoCDN("design/servery", "servery-output"),
            },
            "cafe-pavilion": {
                src: videoCDN("design/cafe-pavilion", "cafe-pavilion-output"),
            },
            "meeting-room": {
                src: videoCDN("design/meeting-room", "meeting-room-output"),
            },
            "courtyard": {
                src: videoCDN("design/courtyard", "courtyard-output"),
            },
        },
        img: {
            "main-entry": {
                src: imageCDN("design", "entry", "png"),
                alt: "",
            },
            "reception": {
                src: imageCDN("design", "reception", "png"),
                alt: "",
            },
            "lift-lobby": {
                src: imageCDN("design", "lift-lobby", "png"),
                alt: "",
            },
            "lounge-lobby": {
                src: imageCDN("design", "lounge-lobby", "png"),
                alt: "",
            },
            "work-lobby": {
                src: imageCDN("design", "work-lobby", "png"),
                alt: "",
            },
            "servery": {
                src: imageCDN("design", "servery", "png"),
                alt: "",
            },
            "cafe-pavilion": {
                src: imageCDN("design", "cafe-pavilion", "png"),
                alt: "",
            },
            "meeting-room": {
                src: imageCDN("design", "meeting-room", "png"),
                alt: "",
            },
            "courtyard": {
                src: imageCDN("design", "courtyard", "png"),
                alt: "",
            },
        }
    },
    amenities: {
        vid: {
            "hero-video": {
                src: videoCDN("amenities/hero", "hero"),
            }
        },
        icon: {
            "concierge": {
                src: iconCDN("amenities-concierge", "svg"),
                alt: "",
            },
            "flexible-space": {
                src: iconCDN("Amenities-Icon-2", "svg"),
                alt: "",
            },
            "multi-purpose": {
                src: iconCDN("Amenities-Icon-3", "svg"),
                alt: "",
            },
            "gym": {
                src: iconCDN("Amenities-Icon-4", "svg"),
                alt: "",
            },
            "facilities": {
                src: iconCDN("Amenities-Icon-5", "svg"),
                alt: "",
            },
            "parking": {
                src: iconCDN("Amenities-Icon-6", "svg"),
                alt: "",
            },
            "cafe": {
                src: iconCDN("Amenities-Icon-7", "svg"),
                alt: "",
            },
        }
    },
    availability: {
        img: {
            "background-image": {
                src: imageCDN("availability", "availability-background-optimised", "jpg"),
                alt: "background-image-building-3d-render",
            },
            "shadow-vectors": {
                "l09": {
                    src: imageCDN("availability/shadow-vector", "l09", "svg"),
                    alt: "",
                },
                "l14": {
                    src: imageCDN("availability/shadow-vector", "l14", "svg"),
                    alt: "",
                },
                "l18": {
                    src: imageCDN("availability/shadow-vector", "l18", "svg"),
                    alt: "",
                },
                "l19": {
                    src: imageCDN("availability/shadow-vector", "l19", "svg"),
                    alt: "",
                },
                "l20": {
                    src: imageCDN("availability/shadow-vector", "l20", "svg"),
                    alt: "",
                },
                "l22": {
                    src: imageCDN("availability/shadow-vector", "l22", "svg"),
                    alt: "",
                },
                "l30": {
                    src: imageCDN("availability/shadow-vector", "l30", "svg"),
                    alt: "",
                },
                "l31": {
                    src: imageCDN("availability/shadow-vector", "l31", "svg"),
                    alt: "",
                },
                "l33": {
                    src: imageCDN("availability/shadow-vector", "l33", "svg"),
                    alt: "",
                },
                "l35": {
                    src: imageCDN("availability/shadow-vector", "l35", "svg"),
                    alt: "",
                },
            },
            "tenancy-vectors": {
                "l09": {
                    src: imageCDN("availability/leasing", "", "svg"),
                    alt: "",
                },
                "l14": {
                    src: imageCDN("availability/leasing", "14", "svg"),
                    alt: "",
                },
                "l18": {
                    src: imageCDN("availability/leasing", "18", "svg"),
                    alt: "",
                },
                "l19": {
                    src: imageCDN("availability/leasing", "19", "svg"),
                    alt: "",
                },
                "l20": {
                    src: imageCDN("availability/leasing", "20", "svg"),
                    alt: "",
                },
                "l22": {
                    src: imageCDN("availability/leasing", "22", "svg"),
                    alt: "",
                },
                "l28": {
                    src: imageCDN("availability/leasing", "28", "svg"),
                    alt: "",
                },
                "l30": {
                    src: imageCDN("availability/leasing", "30", "svg"),
                    alt: "",
                },
                "l31": {
                    src: imageCDN("availability/leasing", "31", "svg"),
                    alt: "",
                },
                "l33": {
                    src: imageCDN("availability/leasing", "33", "svg"),
                    alt: "",
                },
                "l35": [
                    {
                        src: imageCDN("availability/leasing", "35-1", "svg"),
                        alt: "",
                    },
                    {
                        src: imageCDN("availability/leasing", "35-2", "svg"),
                        alt: "",
                    }
                ],
            },
            "third-space": [
                {
                    src: imageCDN("availability/thirdspace", "carousel-1-optimised", "jpg"),
                    alt: "third-space-image",
                },
                {
                    src: imageCDN("availability/thirdspace", "carousel-2-optimised", "jpg"),
                    alt: "third-space-image",
                },
                {
                    src: imageCDN("availability/thirdspace", "carousel-3-optimised", "jpg"),
                    alt: "third-space-image",
                },
                {
                    src: imageCDN("availability/thirdspace", "carousel-4-optimised", "jpg"),
                    alt: "third-space-image",
                },
            ]
        },
        icon: {
            "rating-one": {
                src: imageCDN("availability", "Availability-Rating-01", "svg"),
                alt: "NABERS-energy-rating-4.5-out-of-6"
            },
            "rating-two": {
                src: imageCDN("availability", "Availability-Rating-02", "svg"),
                alt: "NABERS-water-rating-5.5-out-of-6"
            },
            "download": {
                src: iconCDN("download", "svg"),
                alt: "download-icon"
            }
        }
    },
    history: {
        img: {
            "video-poster": {
                src: imageCDN("history", "History-Placeholder", "jpeg"),
                alt: "history-video-placeholder"
            }
        },
        vid: {
            "hero-video": {
                src: videoCDN("history/history", "history-output"),
            }
        }
    },
    gallery: {
        img: {
            carousel: [
                {
                    src: imageCDN("gallery", "gallery"),
                    alt: "",
                }
            ]
        }
    },
    agency: {
        img: {
            "hero": {
                src: imageCDN("agency", "hero-optimised", "jpg"),
                alt: "hero-image",
            }
        },
        icon: {

        }
    },
    hero: {
        img: {
            "hero-one": {
                src: imageCDN("hero-one", "hero"),
                alt: ""
            },
            "hero-two": {
                src: imageCDN("hero-one", "hero"),
                alt: ""
            },
            "hero-three": {
                src: imageCDN("hero-one", "hero"),
                alt: ""
            },
        }
    },
    footer: {
        img: {
            "client-logo": {
                src: imageCDN("footer", "client-logo", "svg"),
                alt: "client-logo"
            },
            "replika-logo": {
                src: imageCDN("footer", "replika-logo", "png"),
                alt: "replika-logo"
            }
        }
    },
    icons: {

    }


}