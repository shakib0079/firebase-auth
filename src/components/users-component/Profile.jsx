import { AuthContext } from "@/contexts/AuthProvider"
import { useContext } from "react"
import { Button } from "../ui/button"
import { useNavigate } from "react-router"


export default function Profile() {
  const { loggedInUser, SignOutHandler } = useContext(AuthContext)
  const navigate = useNavigate();

  
  
  function logoutHandler(){
    SignOutHandler();
    navigate("/login");
  }
  const img = "https://avatars.githubusercontent.com/u/124599?v=4"

  if(!loggedInUser){
    return <div>Please login.....</div>
  }

  return (
    <div className="w-64 p-4 flex flex-col items-center gap-2 shadow-lg rounded">
    <img src={loggedInUser?.photoURL ?? img} alt="" className="w-28 rounded-full ring ring-green-500" />
    <h1 className="text-xl font-semibold">{loggedInUser?.displayName ?? "John Doe"}</h1>
    <p className="text-sm">{loggedInUser?.email ?? ""}</p>
    <div>
      <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde, consequatur enim beatae perspiciatis velit soluta distinctio quibusdam adipisci ipsum!</p>
    </div>
    <Button onClick={logoutHandler}>Log Out</Button>
  </div>
  )
}
