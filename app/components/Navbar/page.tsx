import Image from "next/image"
import React from "react";
import { authUserSession } from "@/app/lib/auth";
import Dropdown from "./Dropdown";


const Navbar = async () => {
  const user = await authUserSession()
  let dashboardLink = '/user';
  let action = 'Sign In';
  let link = '/api/auth/signin/discord'
  if (user) {
    action = 'Sign Out';
    link = '/api/auth/signout'
    if (user.name === process.env.PROVIDER_USERNAME) {
      dashboardLink = '/dashboard';
    } else {
      dashboardLink = '/user';
    }
  }
  return (
    <div className="navbar h-10 bg-[#1c2740] mb-4 pr-4 pl-4">
  <div className="navbar-start">
  <a className="flex" href="/"><button className="btn btn-ghost btn-circle rounded-none">
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> */}
        <Image src={'/jo.co_yellow.png'} alt="Keren" width={100} height={100}/>
    </button></a>
  </div>
  <div className="navbar-center">
    <a href="/" className="btn btn-ghost normal-case text-xl">JO.CO</a>
  </div>
  <div className="navbar-end">
    <Dropdown action={action} dashboard={dashboardLink} url={link}/>
  </div>
</div>
  )
}

export default Navbar