"use client"
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";


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
              href={item.href}
              className={
                cn(
                  buttonVariants({ variant: "link" })
                )
              }
            >{item.title}</Link>
          )
        })}
      </nav>
      <MenuButton />
    </div>
  )
}

function MenuButton() {
  const [pressed, setPressed] = useState(false)
  return (
    <Button
      variant="ghost"
      onClick={() => setPressed(!pressed)}
    >
      {
        pressed ?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="25"
            fill="none"
            viewBox="0 0 42 25"
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeWidth="1.846"
              d="M10.154 1.846L32.308 24M10.154 24L32.308 1.846"
            ></path>
          </svg>
          :
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="14"
            fill="none"
            viewBox="0 0 34 14"
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeWidth="1.846"
              d="M1.461 1h31M1.461 13h31"
            ></path>
          </svg>
      }

    </Button>
  )
}
