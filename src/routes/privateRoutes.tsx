import { RouteObject } from "react-router";
import RouteGuard from "../components/guards/RouteGuard";

const privateRoutes: RouteObject[] = [
  {
    path: "profile",
    element: (
      <RouteGuard>
        <p>This is profile page</p>
      </RouteGuard>
    ),
  },
  {
    path: "settings",
    element: (
      <RouteGuard>
        <p>This is settings page</p>
      </RouteGuard>
    ),
  },
];

export default privateRoutes;
