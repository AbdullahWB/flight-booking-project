import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Flights from "../pages/Flights/Flights/Flights";

import Error from "../Error/Error";
import Contact from "../pages/Contact/Contact";
import Review from "../pages/Review/Review/Review";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/flights",
        element: <Flights />,
      },
      {
        path: "/review",
        element: <Review />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
