import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import AuthProvider from "@/contexts/AuthProvider";

export default function UserLayout() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <AuthProvider>
      <div className= "border-b">
        <Header/>
      </div>
      <div className="min-h-max flex justify-center items-center p-4">
        <Outlet />
      </div>
      <div className=" h-24 bg-slate-800">
      <Footer />
      </div>
      </AuthProvider>
    </main>
  )
}
