import logo from "./logo.svg";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";

import ListCharacter from "./views/ListCharacter";
import Home from "./views/Home";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/character",
          element: <ListCharacter />,
        },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    
      <RouterProvider router={router} />
  );
}

export default App;
