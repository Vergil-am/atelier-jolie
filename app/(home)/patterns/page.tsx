import Search from "@/components/search"
import { buttonVariants } from "@/components/ui/button"
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
                key={item.title}
                className={buttonVariants({ variant: "link" })}
                href={`/apparel?pattern=${item.href}`}>{item.title}
              </Link>
            )
          })
        }
      </div>
      <Search />
    </div>

  )
}

