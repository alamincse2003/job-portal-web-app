import Home from "../pages/Home";
import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Jobs from "../pages/Jobs";
import JobsDetails from "../pages/JobsDetails";
import Bookmarks from "../pages/BookMarks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/jobs/:id", element: <JobsDetails /> },
      { path: "/bookmarks", element: <Bookmarks /> },
    ],
  },
]);
