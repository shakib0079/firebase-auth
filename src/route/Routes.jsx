import Products from "@/components/products-component/Products";
import Home from "@/components/users-component/Home";
import Login from "@/components/users-component/Login";
import Profile from "@/components/users-component/Profile";
import Signup from "@/components/users-component/Signup";
import UserLayout from "@/components/users-component/UserLayout";
import { createBrowserRouter } from "react-router";

export let router = createBrowserRouter([
    {
      path: "/",
      Component: UserLayout,
      children: [
        {
          path: "/",
          Component: Home,
        },
        {
            path: "/login",
            Component: Login
        },
        {
            path: "/signup",
            Component: Signup
        },
        {
            path: "/profile",
            Component: Profile
        },
        {
          path: "/products",
          Component: Products
        }
      ],
    },
  ]);