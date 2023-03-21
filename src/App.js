import React from "react";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Wrapper from "./component/Wrapper";
import About from "./pages/About";
import Home from "./pages/Home";
import Merchant from "./pages/Merchant";
import Business from "./pages/Business";
import Enterprise from "./pages/Enterprise";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "merchant", element: <Merchant /> },
        { path: "business", element: <Business /> },
        { path: "enterprise", element: <Enterprise /> },
      ],
    },
  ]);

  return <RouterProvider router={route} />;
};

export default App;
