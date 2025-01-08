import Layouts from "@/layouts/layouts";
import HomePage from "@/pages/home";
import ProfilePage from "@/pages/profile";
import {createBrowserRouter} from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
        ],
    },
    
])

export default Router