import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Collaborations from "./pages/Collaborations";
import FESelect from "./pages/FESelect";
import FESmallCapSweden from "./pages/FESmallCapSweden";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import Risk from "./pages/Risk";
import Team from "./pages/Team";
import WhyUs from "./pages/WhyUs";
import { NotFound } from "./pages/Notfound";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "Smabolag", element: <WhyUs /> },
      { path: "Fonder", element: <h1>Fonder</h1> },
      { path: "fe-selec", element: <FESelect /> },
      {
        path: "fe-smabolag-sverige",
        element: <FESmallCapSweden />,
      },
      { path: "Investera", element: <Invest /> },
      { path: "Nyheter", element: <h1>Nyheter</h1> },
      // { path: "Information", element: <About /> },
      {
        path: "Information/Teamet",
        element: <Team />,
      },
      {
        path: "Information/Omoss",
        element: <About />,
      },
      {
        path: "Information/Samarbeten",
        element: <Collaborations />,
      },
      {
        path: "Information/Riskinformation",
        element: <Risk />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
