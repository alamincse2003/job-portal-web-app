import Home from "../pages/Home";
import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Jobs from "../pages/Jobs";
import JobsDetails from "../pages/JobsDetails";
import AppliedJobs from "../pages/AppliedJobs";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Bookmarks from "../pages/Bookmarks";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/jobs/:id", element: <JobsDetails /> },
      { path: "/bookmarks", element: <Bookmarks /> },
      {
        path: "/applied",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
