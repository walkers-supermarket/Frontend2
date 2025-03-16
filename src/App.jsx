import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <LandingPage /> }]);
  return <RouterProvider router={router} />;
}

export default App;
