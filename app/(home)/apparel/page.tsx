import Filters from "@/components/filters"
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
  },
  {
    id: 6,
    image: "https://th.bing.com/th/id/R.cb0368788bd764aef6b0079d7c045c8e?rik=mOLtSL%2bkWb8dOg&pid=ImgRaw&r=0",
    title: "dress 6"
  }
]
export default function Apparel() {
  return (
    <main>
      <Filters />
      <div className="flex flex-wrap gap-2">
        {Clothes.map(item => {
          return (
            <Link key={item.id} href={`product/${item.id}`}>
              <img src={item.image} width={328} height={456} />
            </Link>
          )
        })}
      </div>
    </main>
  )
}
