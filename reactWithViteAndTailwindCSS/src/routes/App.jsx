import { BrowserRouter, useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signout from "../pages/Signout";
import MyOrder from "../pages/MyOrder";
import MyOrders from "../pages/MyOrders";
import NotFound from "../pages/NotFound";
import MyAccount from "../pages/MyAccount";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sign-in", element: <Signin /> },
    { path: "/signout", element: <Signout /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Layout>
        <AppRoutes></AppRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
