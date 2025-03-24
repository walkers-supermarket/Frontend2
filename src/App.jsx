import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SinglePage from "./pages/SinglePage";
import DashboardLayout from "./layouts/DashboardLayout";
import MyProfile from "./components/MyProfile";
import MyReturns from "./components/MyReturns";
import AddressBook from "./components/AddressBook";
import PaymentOptions from "./components/PaymentOptions";
import MyCancellations from "./components/MyCancellations";
import MyWishlist from "./components/MyWishlist";


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
       path: "/cart",
       element: <CartPage />,
     },
     {
       path: "/checkout",
       element: <CheckoutPage />,
     },
     {
       path: "/single",
       element: <SinglePage />,
     },
     {
       path: "/dashboard",
       element: <DashboardLayout />,
       children: [
         {
           index: true,
           element: <MyProfile />,
         },
         {
           path: 'addressbook',
           element: <AddressBook/>,
         },
         {
           path: 'payment-options',
           element: <PaymentOptions/>,
         },
         {
           path: 'returns',
           element: <MyReturns/>,
         },
         {
           path: 'cancellations',
           element: <MyCancellations/>,
         },
         {
           path: 'wishlist',
           element: <MyWishlist/>,
         },
       ],
     },
   ]);
   return <RouterProvider router={router} />;
  
}

export default App;
