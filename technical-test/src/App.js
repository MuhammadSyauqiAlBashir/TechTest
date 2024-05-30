import logo from "./logo.svg";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";

import ListCharacter from "./views/ListCharacter";
import Home from "./views/Home";
import Location from "./views/Location";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/character",
          element: <ListCharacter />,
        },
        {
          path: "/detailcharacter",
          element: <ListCharacter />,
        },
        {
          path: "/locations",
          element: <Location />,
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
