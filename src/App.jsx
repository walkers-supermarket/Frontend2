import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
   const router = createBrowserRouter([
    {
       path: "/",
      element: <LandingPage />,
     },
     {
      path: "/signup",
       element: <SignupPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
   {
      path: "/about",
      element: <AboutPage />,
   },
   {
     path: "/contact",
    element: <ContactPage />,
   },
 ]);
   return <RouterProvider router={router} />;
  
}

export default App;
