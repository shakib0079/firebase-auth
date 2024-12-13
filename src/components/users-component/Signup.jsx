import { Button } from "../ui/button";
import { Input } from "../ui/input";
import LoginSocial from "./LoginSocial";


export default function Signup() {
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
        <Button>Sign Up</Button>
        </form>
        <LoginSocial/>
    </div>
  )
}
