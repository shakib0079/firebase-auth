import { useContext } from "react";
import { Button } from "../ui/button";
import { AuthContext } from "@/contexts/AuthProvider";

export default function LoginSocial() {

    const { signUpWithGoogle } = useContext(AuthContext);

  return (
    <div className="w-3/4 flex flex-col gap-4">
      <div className="border-t-2"></div>
        <Button variant="outline" onClick={signUpWithGoogle}>Login with Google</Button>
    </div>
  )
}
