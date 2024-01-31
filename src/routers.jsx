import Home from "./Components/Screens/Home";
import NotFound from "./Components/Screens/NotFound";

//list routes
export const routes = [
    {path: "/", element: <Home/>},
    {path: "*", element: <NotFound/>},
]