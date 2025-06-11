import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Profil } from "./screens/Profil";
import { TableauDeBord } from "./screens/TableauDeBord";
import { Forum } from "./screens/Forum";
import { ForumDetails } from "./screens/ForumDetails";
import { OffresDemploi } from "./screens/OffresDemploi";
import { DtailsOffreDemploi } from "./screens/DtailsOffreDemploi";
import { ListeDesTests } from "./screens/ListeDesTests";
import {Paramtre} from "./screens/Paramtre"
import { TestsDtails } from "./screens/TestsDtails";
import {RsultatDeTest} from "./screens/RsultatDeTest";
import { RendezVous } from "./screens/RendezVous";
import { Formations } from "./screens/Formations";
import { DtailsDeLa } from "./screens/DtailsDeLa";
import { HomePage } from "./screens/HomePage";
import { ProfilEntreprise } from "./screens/ProfilEntreprise";
import {Connexion} from "./screens/Connexion";
import {Inscription} from "./screens/Inscription";
import {ForgotPassword} from "./screens/ForgotPassword";
import { ResetPassword } from "./screens/Reset/ResetPassword";


const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePage />
  },
  {
    path: "/Profil",
    element: <Profil />
  },
  {
    path: "/ForumDetails",
    element: <ForumDetails />,
  },
  {
    path: "/Forum",
    element: <Forum />,
  },
  {
    path: "/OffresDemploi",
    element: <OffresDemploi />,
  },
  {
    path: "/DtailsOffreDemploi/:jobId",
    element: <DtailsOffreDemploi />,
  },
  {
    path: "/TableauDeBord",
    element: <TableauDeBord />,
  },
   {
    path: "/Paramtre",
    element: <Paramtre />,
  },
  {
    path: "/Formations",
    element: <Formations />,
  },
  {
    path: "/DtailsDeLa",
    element: <DtailsDeLa />,
  },
  {
    path: "/ListeDesTests",
    element: <ListeDesTests />,
  },
  {
    path: "/TestsDtails",
    element: <TestsDtails />,
  },
  {
    path: "/RsultatDeTest",
    element: <RsultatDeTest />,
  },
  {
    path: "/RendezVous",
    element: <RendezVous />,
  },
  {
    path: "/ProfilEntreprise",
    element: <ProfilEntreprise />,
  },
  ,
  {
    path: "/Connection",
    element: <Connexion />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  ,
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  ,
  {
    path: "/reset-password/:token",
    element: <ResetPassword />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
