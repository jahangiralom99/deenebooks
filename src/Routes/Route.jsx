import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Route;
