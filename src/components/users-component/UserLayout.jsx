import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import AuthProvider from "@/contexts/AuthProvider";

export default function UserLayout() {
  return (
    <main className="w-full h-full flex flex-col">
      <div className= "border-b">
        <Header/>
      </div>
      <div className="h-3/4 flex justify-center items-center">
      <AuthProvider>
        <Outlet />
      </AuthProvider>
      </div>
      <div className="h-1/4 bg-slate-800">
      <Footer />
      </div>
    </main>
  )
}