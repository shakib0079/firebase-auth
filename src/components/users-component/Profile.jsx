import { AuthContext } from "@/contexts/AuthProvider"
import { useContext } from "react"
import { Button } from "../ui/button"
import { Navigate } from "react-router";


export default function Profile() {
  const { loggedInUser, SignOutHandler } = useContext(AuthContext)
  

  function logoutHandler(){
    SignOutHandler();
  }
  const img = "https://avatars.githubusercontent.com/u/124599?v=4"

  if(!loggedInUser){
    return <Navigate to="/login"/>
  }

  return (
    <div className="w-64 p-4 flex flex-col items-center gap-2 shadow-lg rounded">
    {loggedInUser && (<img src={loggedInUser?.photoURL ?? img} alt="" className="w-28 rounded-full ring ring-green-500" />)}
    <h1 className="text-xl font-semibold">{loggedInUser?.displayName ?? "John Doe"}</h1>
    <p className="text-sm">{loggedInUser?.email ?? ""}</p>
    <div>
      <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde, consequatur enim beatae perspiciatis velit soluta distinctio quibusdam adipisci ipsum!</p>
    </div>
    <Button onClick={logoutHandler}>Log Out</Button>
  </div>
  )
}
