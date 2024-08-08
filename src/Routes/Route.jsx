import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";
import { loader } from "../utilities/loader";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Route;
