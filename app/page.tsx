import Navbar from "@/components/navbar"
import Link from "next/link"
export default function Home() {
  return (
    <>

      <Navbar />
      <main className="min-h-[92vh] max-h-screen bg-home-bg bg-no-repeat bg-cover">
        <Link
          href=''
          className="absolute bottom-20 left-[45%] bg-black text-white py-2 px-[101px] max-sm:left-1 max-sm:px-6"
        >
          BOOK AN APPOINTMENT
        </Link>
        <Link
          href='/apparel'
          className="bottom-20 right-6 absolute bg-black text-white py-2 px-[101px]  max-sm:px-6"
        >
          Shop
        </Link>
      </main>
    </>
  )
}
