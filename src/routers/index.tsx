import Layouts from "@/layouts/layouts";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import ProfilePage from "@/pages/profile";
import RegisterPage from "@/pages/register";
import { createBrowserRouter } from "react-router-dom";

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

 
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
  
]);

export default Router;
