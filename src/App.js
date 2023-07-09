import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Country from "./pages/Country";
import RootLayout from "./pages/RootLayout";
import Destination from "./pages/Destination";
import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:continentName",
        element: <Country />,
      },
      {
        path: "/:continentName/:countryName",
        element: <Destination />,
      },
      {
        path: "/:continentName/:countryName/:destinationName",
        element: <Details />,
      },
    ],
  },
  {},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
