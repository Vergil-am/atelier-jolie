"use client"
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SideMenu from "./sideMenu";


const Items = [
  { title: "Apparel", href: "/apparel" },
  { title: "Patterns", href: "/patterns" }]
export default function Navbar() {
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
      <nav>
        {Items.map(item => {
          return (
            <Link
              key={item.title}
              href={item.href}
              className={
                cn(
                  buttonVariants({ variant: "link" }),
                  window != undefined ?
                    window.location.pathname === item.href ? "underline" : "" : ""
                )
              }
            >{item.title}</Link>
          )
        })}
      </nav>
      <SideMenu />
    </div>
  )
}


