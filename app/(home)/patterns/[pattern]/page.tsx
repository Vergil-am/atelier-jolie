import Link from "next/link"
const Clothes = [
  {
    id: 6,
    image: "https://th.bing.com/th/id/R.cb0368788bd764aef6b0079d7c045c8e?rik=mOLtSL%2bkWb8dOg&pid=ImgRaw&r=0",
    title: "dress 1",
    pattern: "dress"
  },
  {
    id: 7,
    image: "https://th.bing.com/th/id/OIP.-86QJp-4-ofTKnGaTJm3vQHaHa?pid=ImgDet&rs=1",
    title: "tshirt",

    pattern: "tshirt"
  },
  {
    id: 8,
    image: "https://th.bing.com/th/id/R.cb0368788bd764aef6b0079d7c045c8e?rik=mOLtSL%2bkWb8dOg&pid=ImgRaw&r=0",
    title: "dress 3",
    pattern: "dress"
  },
  {
    id: 9,
    image: "https://th.bing.com/th/id/R.0ac6004bf3e4e91f945102928111219c?rik=fYquRnDl9NI67A&riu=http%3a%2f%2fwww.elizabethcustomskirts.com%2fwp-content%2fuploads%2f2014%2f07%2fgray-wool-blen-pleated-skirt.jpg&ehk=WqrpyL7AxDJe0H7xsgW7zgBTTX2VmyPKFUhWjv%2bdseE%3d&risl=&pid=ImgRaw&r=0",
    title: "skirt 1",
    pattern: "skirt"
  },
  {
    id: 10,
    image: "https://th.bing.com/th/id/OIP.HBnomO2VfsOmiSFFTlIqGAHaJr?pid=ImgDet&rs=1",
    title: "skirt 2",
    pattern: "skirt"
  },
  {
    id: 10,
    image: "https://th.bing.com/th/id/OIP.UZpAFv9FCZUYJ8NJ3JR7YQHaJ4?pid=ImgDet&rs=1",
    title: "denim",
    pattern: "denim"
  }
]
export default function Patterns({
  params, searchParams
}: { params: { pattern: string }, searchParams: { search: string } }) {
  console.log(searchParams)
  const clothes = Clothes.filter(item => {
    return item.pattern == params.pattern || item.title.includes(searchParams.search)
  })
  return (
    <div className="flex flex-wrap ml-44 gap-6">
      {clothes.map(item => {
        return (
          <Link href={`/product/${item.id}`}>
            <img src={item.image}
              width={338.34}
              height={486.36}
            />
          </Link>
        )
      })}
    </div>
  )
}
