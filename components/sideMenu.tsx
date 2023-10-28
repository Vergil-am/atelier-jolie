import { Button, buttonVariants } from "./ui/button"
import { useState } from "react"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Items = [
  {
    title: "Shop",
    href: "/apparel"
  },
  {
    title: "Home",
    href: "/"
  }, {
    title: "Founder message",
    href: ""
  }, {
    title: "About",
    href: ""
  },
  {
    title: "In residence",
    href: ""
  }, {
    title: "The Atelier",
    href: ""
  },
  {
    title: "Journal",
    href: ""
  },
  {
    title: "Book an Appointment",
    href: ""
  },
]
export default function SideMenu() {
  const [pressed, setPressed] = useState(false)
  return (
    <Sheet modal={false}>

      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn(pressed ? "opacity-0" : "")}
          onClick={() => setPressed(!pressed)}
        >

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
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-black flex flex-col justify-center"
      >
        <SheetClose
          className=" absolute top-4 left-[-100px]"
          asChild
        >
          <Button
            variant="ghost"
            className="w-16"
            onClick={() => setPressed(!pressed)}
          >
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
          </Button>
        </SheetClose>
        {Items.map(item => {
          return (
            <SheetClose key={item.title}>
              <Link
                className={cn(buttonVariants({ variant: "link" }), "text-white")}
                href={item.href}>{item.title}</Link>
            </SheetClose>
          )
        })}
      </SheetContent>

    </Sheet>
  )
}
