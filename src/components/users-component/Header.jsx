import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthProvider";

export default function Header() {

  const { loggedInUser } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-md font-bold">Banking Apps</h1>
      <div className="flex gap-4 text-sm font-semibold items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        { loggedInUser ? "" : <div>
        <NavLink to="/login"><Button variant="Ghost">Login</Button></NavLink>
        <NavLink to="/signup"><Button>Sign up</Button></NavLink>
        </div> }
        
      </div>
    </div>
  )
}
