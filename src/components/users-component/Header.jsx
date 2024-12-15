import {  Navigate, NavLink } from "react-router";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthProvider";

export default function Header() {

  const { loggedInUser,SignOutHandler } = useContext(AuthContext);

  function logOutHandler(){
    SignOutHandler();
    return <Navigate to="/login"/>
  }

  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-md font-bold">Banking Apps</h1>
      <div className="flex gap-4 text-sm font-semibold items-center">
        <NavLink to="/">Home</NavLink>


        {loggedInUser ? (
          <>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink><Button onClick={logOutHandler}>Logout</Button></NavLink>
          </>
        )  : (
          <>
          <NavLink to="/login"><Button variant="Ghost">Login</Button></NavLink>
          <NavLink to="/signup"><Button>Sign up</Button></NavLink>
          </>
        )}
        
        
      </div>
    </div>
  )
}
