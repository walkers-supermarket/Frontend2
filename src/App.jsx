import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ManageAccountPage from "./pages/ManageAccountPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SinglePage from "./pages/SinglePage";

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
   {
     path: "/forgot-password",
    element: <ForgotPasswordPage />,
   },
   {
     path: "/account",
    element: <ManageAccountPage />,
   },
   {
     path: "/cart",
    element: <CartPage />,
   },
   {
     path: "/checkout",
    element: <CheckoutPage />,
     },
   {
     path: "/single",
    element: <SinglePage/>,
     },
   
 ]);
   return <RouterProvider router={router} />;
  
}

export default App;
