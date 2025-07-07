import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import NotFound from "../pages/not-found";
import Cars from "../pages/rent-cars";
import Trems from "../pages/terms-conditions";
import AuthPage from "../pages/auth";
import CarDetailsPage from "../pages/cars-detail";
import FAQS from "../pages/faqs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Contact />,
        path: "contact-us",
      },
      {
        element: <FAQS />,
        path: "faqs",
      },
      {
        element: <NotFound />,
        path: "*",
      },
      {
        element: <Cars />,
        path: "cars",
      },
      {
        element: <Trems />,
        path: "terms",
      },
      {
        path: "cars/:name",
        element: <CarDetailsPage />,
      },
      {
        element: <AuthPage />,
        path: "my-accout",
      },
    ],
  },
]);
