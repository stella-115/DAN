import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import HomeComp from "../pages/home/HomeComp";
import ServiceLayout from "../layout/ServiceLayout";
import Service from "../pages/services/Service";
import ContactLayout from "../layout/ContactLayout";
import Contact from "../pages/contact/Contact";
import GalleryLayout from "../layout/GalleryLayout";
import Gallery from "../pages/gallery/Gallery";


export const element = createBrowserRouter (
    [
        {
            path: "/",
            element: <HomeLayout/>,
            children:[{
                index: true,
                element: <HomeComp/>
            }]
        },
         {
            path: "/service",
            element: <ServiceLayout/>,
            children:[{
                index: true,
                element: <Service/>
            }]
        },
         {
            path: "/contact",
            element: <ContactLayout/>,
            children:[{
                index: true,
                element: <Contact/>
            }]
        },
         {
            path: "/gallery",
            element: <GalleryLayout/>,
            children:[{
                index: true,
                element: <Gallery/>
            }]
        }
    ]
)