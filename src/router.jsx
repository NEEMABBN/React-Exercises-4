import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/mainPage/:name",
    element: <MainPage />,
  },
]);

export default router;
