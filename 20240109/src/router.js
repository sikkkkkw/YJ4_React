import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./routes/NotFound";
import Movies from "./routes/Movies";
import TV from "./routes/TV";
import Details from "./com/Details";
const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <App /> },
      { path: "/movies", element: <Movies /> },
      { path: "/tv", element: <TV /> },
      { path: "/detail/:movieId", element: <Details /> },
    ],
  },
]);
export default router;
