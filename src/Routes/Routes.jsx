import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/Shared/Loading/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ],
  },
]);
