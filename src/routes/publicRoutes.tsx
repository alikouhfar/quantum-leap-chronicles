import { RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import { LoginPage } from "../pages/LoginPage";

const publicRoutes: RouteObject[] = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <p>Main Page</p>,
      },
      {
        path: "products",
        element: <p>Products Page</p>,
      },
      {
        path: "products/:productId",
        element: <p>Product Page</p>,
      },
    ],
  },
  {
    path: "",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <p>Signup Page</p> },
    ],
  },
];

export default publicRoutes;
