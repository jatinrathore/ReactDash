import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
