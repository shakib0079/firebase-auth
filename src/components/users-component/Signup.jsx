import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import LoginSocial from "./LoginSocial";
import { AuthContext } from "@/contexts/AuthProvider";

export default function Signup() {
  const [ email, setEmail] = useState("");
  const [ password, setPassword ] = useState("");

  const { signUpNewUser } = useContext(AuthContext)

  function signUpFormHandler(event){
    event.preventDefault();
    signUpNewUser(email, password);
  }


  return (
      <div className="w-2/5 p-6 flex flex-col gap-4">
        <h1 className="my-2 text-xl font-bold">Sign Up</h1>
        <form className="w-3/4 flex flex-col gap-4">
        <div>
            <label>Email</label>
            <Input type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <label>Password</label>
            <Input type="password" password={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
        <Button onClick={signUpFormHandler}>Sign Up</Button>
        </form>
        <LoginSocial/>
    </div>
  )
}
