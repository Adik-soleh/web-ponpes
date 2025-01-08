import Home from "@/components/items/home";
import { Profile } from "@/components/items/profile";
import Layouts from "@/layouts/layouts";
import {createBrowserRouter} from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
    
])

export default Router