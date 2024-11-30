import { createBrowserRouter } from "react-router";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

const routes = createBrowserRouter([...publicRoutes, ...privateRoutes]);

export default routes;
