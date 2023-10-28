import Filters from "@/components/filters"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Clothes = [
  {
    id: 1,
    image: "https://th.bing.com/th/id/R.cb0368788bd764aef6b0079d7c045c8e?rik=mOLtSL%2bkWb8dOg&pid=ImgRaw&r=0",
    title: "dress 1"
  },
  {
    id: 2,
    image: "https://th.bing.com/th/id/R.cb0368788bd764aef6b0079d7c045c8e?rik=mOLtSL%2bkWb8dOg&pid=ImgRaw&r=0",
    title: "dress 2"
  },
  {
    id: 3,
    image: "https://th.bing.com/th/id/R.cb0368788bd764aef6b0079d7c045c8e?rik=mOLtSL%2bkWb8dOg&pid=ImgRaw&r=0",
    title: "dress 3"
  },
  {
    id: 4,
    image: "https://th.bing.com/th/id/R.cb0368788bd764aef6b0079d7c045c8e?rik=mOLtSL%2bkWb8dOg&pid=ImgRaw&r=0",
    title: "dress 4"
  },
  {
    id: 5,
    image: "https://th.bing.com/th/id/R.cb0368788bd764aef6b0079d7c045c8e?rik=mOLtSL%2bkWb8dOg&pid=ImgRaw&r=0",
    title: "dress 5"
  }
]
export default function Apparel() {
  return (
    <main>
      <Filters />

      <div className="grid grid-rows-4 grid-flow-col gap-4 max-h-[920px]">
        {Clothes.map((item, index) => {
          return (
            <Link
              className={cn(index != 4 ? "row-span-2 col-span-2" : "row-span-4 col-span-3", "overflow-hidden")}
              key={item.id}
              href={`product/${item.id}`}>
              <img src={item.image} />
            </Link>

          )
        })}


      </div>
    </main>
  )
}


