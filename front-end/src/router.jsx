import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        // path: "/",
        element: <Home />,
      },
      {
        path: "/admin/:id",
        element: <Admin />,
      },
    ],
  },
]);

// import { useParams } from 'react-router-dom';
// const { userId } = useParams();
