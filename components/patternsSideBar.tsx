import Search from "@/components/search"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Items = [
  {
    title: "T-shirts",
    href: "tshirt",
  },
  {
    title: "Jackets",
    href: "jacket",
  },
  {
    title: "Dresses",
    href: "dress",
  },
  {
    title: "Skirts",
    href: "skirt",
  },
  {
    title: "Denim",
    href: "denim",
  }
]

export default function PatternsSideBar(params: { pattern?: string }) {
  const { pattern } = params
  return (
    <div className="h-screen bg-[#EFEFEF] flex flex-col items-center fixed left-0 w-40">
      <div className="flex flex-col items-center justify-between h-[40vh] w-full mt-20">
        {
          Items.map(item => {
            return (
              <Link
                key={item.title}
                className={cn(buttonVariants({ variant: "link" }), pattern == item.href ? "underline" : "")}
                href={`/patterns/${item.href}`}>{item.title}
              </Link>
            )
          })
        }
      </div>
      <Search className="w-24" />
    </div>)
}
