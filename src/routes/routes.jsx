import App from "../App";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:site",
    element: <App />,
  },
];

export default routes;
