import { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import LoginSocial from "./LoginSocial";
import { AuthContext } from "@/contexts/AuthProvider";
import { useNavigate } from "react-router";


export default function Login() {

    const [ email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");
    const {loggedInUser, signInUser, errorState} = useContext(AuthContext)
    let navigate = useNavigate();

    
    console.log(!errorState);
    useEffect(() => {
        if(loggedInUser){
        
            navigate("/profile");
            return;
        }
    },[navigate, loggedInUser]);

    function signInHandler(event){
        event.preventDefault()
        signInUser(email, password);
        // if(errorState) return navigate("/profile");
        // return;
    }

    // if(loading){
    //     return <div>Loading..........</div>
    // }

  return (
    <div className="w-2/5 p-6 flex flex-col gap-4">
        <h1 className="my-2 text-xl font-bold">Login</h1>
        <form className="w-3/4 flex flex-col gap-4">
        <div>
            <label>Email</label>
            <Input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <label>Password</label>
            <Input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <Button onClick={signInHandler}>Login</Button>
        </form>
        <LoginSocial/>
    </div>
  )
}
