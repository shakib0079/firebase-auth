import { useContext } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import LoginSocial from "./LoginSocial";
import { AuthContext } from "@/contexts/AuthProvider";
import { useNavigate } from "react-router";


export default function Login() {
    const {loggedInUser, loading} = useContext(AuthContext)
    let navigate = useNavigate();

    if(loading){
        return <div>Loading..........</div>
    }

    if(loggedInUser){
        
        navigate("/profile");
        return;
    }

  return (
    <div className="w-2/5 p-6 flex flex-col gap-4">
        <form className="w-3/4 flex flex-col gap-4">
        <div>
            <label>Email</label>
            <Input type="email" placeholder="Enter your email"/>
        </div>
        <div>
            <label>Password</label>
            <Input type="password" placeholder="Enter your password"/>
        </div>
        <Button>Login</Button>
        </form>
        <LoginSocial/>
    </div>
  )
}
