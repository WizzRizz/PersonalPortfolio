import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/HomePage/HomePage";

import { NotFoundPage } from "./Pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
