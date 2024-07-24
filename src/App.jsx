import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout, HomeLayout, Login, Register } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <HomeLayout /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/dashboard", element: <DashboardLayout /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
