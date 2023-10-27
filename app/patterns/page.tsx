import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
export default function Patterns() {
  return (
    <div className="h-screen bg-[#EFEFEF] flex flex-col items-center">
      <div className="flex flex-col items-center justify-between h-[40vh] w-full mt-20">
        {
          Items.map(item => {
            return (
              <Link
                className={buttonVariants({ variant: "link" })}
                href={item.href}>{item.title}
              </Link>
            )
          })
        }
      </div>
      <Input className="bg-transparent  w-52 text-center border-b-[#A0A0A0] border-t-transparent border-x-transparent mt-32"
        placeholder="Search"
      />
    </div>

  )
}

