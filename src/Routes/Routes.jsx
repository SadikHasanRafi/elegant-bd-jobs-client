import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Banner from '../Pages/Home/Banner'

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
