import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Banner from '../Pages/Home/'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      }
    ],
  },
]);
