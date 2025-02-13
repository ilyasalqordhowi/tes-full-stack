import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Customer from "./page/Customer";

const page = createBrowserRouter([
  {
    path: "/",
    element: <Customer />,
  },
]);

function App() {
  return <RouterProvider router={page} />;
}

export default App;
