import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/Shared/Loading/NotFound/NotFound";
import SetRole from "../Pages/SetRole/SetRole";
import DashboardLayout from "../Layout/DashboardLayout";
import SavedJobs from "../Pages/Dashboard/SavedJobs/SavedJobs";

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
      {
        path: "/setrole",
        element: <SetRole></SetRole>
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "dashboard/savedjobs",
        element: <SavedJobs></SavedJobs>
      },
    ]
  }
]);
