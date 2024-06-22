import App from "../App";
import ErrorPage from "./ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:site",
    element: <App />,
  },
];

export default routes;
