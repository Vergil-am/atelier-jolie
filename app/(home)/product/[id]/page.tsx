import { Button, buttonVariants } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ChevronDown } from "lucide-react"


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
  },
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
export default function Product({ params }: any) {
  const product = Clothes[params.id]
  return (
    <main className="flex  mt-5 max-md:flex-col ">
      <div className="w-[50vw] flex justify-center gap-4 max-md:w-full max-lg:w-[60vw]">
        <div className="flex flex-col gap-4 h-[518px] overflow-hidden ">
          <img
            className="w-[77px] h-[119px] "
            src={product.image}
          />
          <img

            className="w-[77px] h-[119px]"
            src={product.image}
          />
          <img

            className="w-[77px] h-[119px]"
            src={product.image}
          />
          <img

            className="w-[77px] h-[119px]"
            src={product.image}
          />
        </div>
        <div>
          <img
            className="h-[518px] w-[418px]"
            src={product.image}
          />
        </div>
      </div>
      <div className="w-[50vw] p-5 mx-20 h-screen flex flex-col gap-8 max-md:w-full max-md:mx-5 max-lg:w-[40vw]">
        <h1 className="self-start font-normal text-3xl">{product.title}</h1>
        <h1 className="self-start font-normal text-3xl"> $</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Proin massa pulvinar scelerisque ipsum est. Quis tortor amet porttitor lectus sem donec a nisi. Sed faucibus sit amet iaculis ac. Et aliquet elementum dignissim eu mattis mauris.</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="border-black border-solid border flex w-full h-[50px] justify-between items-center px-5 relative">
              press me
              <ChevronDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-black border-solid border relative w-full  justify-between items-center px-5 rounded-[0px]">
            <DropdownMenuItem >Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
            <DropdownMenuItem>Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex justify-between w-full">
          <Input className="w-24 h-12 rounded-none border-black"
            defaultValue={1}
          />
          <Button

            className="h-12 rounded-none w-2/3 bg-black"
          >Add to cart</Button>
        </div>
        <Button variant='outline'
          className="h-12 rounded-none w-full border-black"
        >Buy now</Button>
        <Tabs>
          <TabsList defaultValue='details' className="bg-transparent" >
            <TabsTrigger
              value="details"
              className={buttonVariants({ variant: "link" })}
            >Details</TabsTrigger>
            <TabsTrigger value="shipping"
              className={buttonVariants({ variant: "link" })}
            >Shipping</TabsTrigger>
            <TabsTrigger value="returns"
              className={buttonVariants({ variant: "link" })}
            >Retuns</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            Lorem ipsum dolor sit amet consectetur. Sapien elit eget senectus est faucibus lobortis enim praesent. Quis senectus tincidunt convallis eu. Id ac aenean risus integer et interdum ipsum. Lobortis facilisi accumsan malesuada mi amet. Adipiscing in viverra bibendum dui. Quisque auctor velit diam amet in nisl. Consectetur pellentesque.
          </TabsContent>
          <TabsContent value="shipping">
            Lorem ipsum dolor sit amet consectetur. Sapien elit eget senectus est faucibus lobortis enim praesent. Quis senectus tincidunt convallis eu. Id ac aenean risus integer et interdum ipsum. Lobortis facilisi accumsan malesuada mi amet. Adipiscing in viverra bibendum dui. Quisque auctor velit diam amet in nisl. Consectetur pellentesque.
          </TabsContent>
          <TabsContent value="returns">
            Lorem ipsum dolor sit amet consectetur. Sapien elit eget senectus est faucibus lobortis enim praesent. Quis senectus tincidunt convallis eu. Id ac aenean risus integer et interdum ipsum. Lobortis facilisi accumsan malesuada mi amet. Adipiscing in viverra bibendum dui. Quisque auctor velit diam amet in nisl. Consectetur pellentesque.
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
