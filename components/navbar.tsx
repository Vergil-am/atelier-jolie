"use client"
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SideMenu from "./sideMenu";
import { useEffect, useState } from "react";


const Items = [
  { title: "Apparel", href: "/apparel" },
  { title: "Patterns", href: "/patterns" }]
export default function Navbar() {
  const [location, setLocation] = useState("")
  useEffect(() => {
    setLocation(window.location.pathname)
  }, [])
  return (
    <div className="w-screen h-20 flex items-center justify-between">
      <Link href="/">
        <Image
          className="ml-5"
          src="/logo.svg"
          alt="Atelier jolie"
          width={87}
          height={44}
        /></Link>
      <nav className="flex">
        {Items.map(item => {
          return (
            <Link
              key={item.title}
              href={item.href}
              className={
                cn(
                  buttonVariants({ variant: "link" }),
                  location == item.href ? "underline" : ""
                )
              }
              onClick={() => setLocation(item.href)}
            >{item.title}</Link>
          )
        })}
      </nav>
      <div className="flex justify-between items-center gap-6 mr-10 max-sm:mr-2">
        <p className="text-black font-medium text-xs ">Cart</p>
        <SideMenu />
      </div>
    </div>
  )
}


