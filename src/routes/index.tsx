import type { RouteObject } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import AuthGuard from "./AuthGuard";
import Loadable from "./Loadable";
import Error from "@/pages/Error";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
// *  AUTHENTICATION PAGES
const Login = Loadable({
  loader: () => import("../pages/Login"),
});

//  * HOME PAGE
const Home = Loadable({ loader: () => import("../pages/Dashboard") });

const routes: RouteObject[] = [
  {
    //public
    path: "login",
    element: Login,
  },
  {
    path: "/",
    element: <AuthGuard />,
    children: [
      {
        //private
        element: <MainLayout />,
        children: [
          { index: true, element: Home },
          { path: "hop-dong-va-dang-ky", element: Home },
          {
            path: "*",
            element: Home,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];
const router = createBrowserRouter(routes);
export default router;
