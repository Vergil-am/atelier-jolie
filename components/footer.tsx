import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-screen bg-black h-14 fixed bottom-0 text-white flex justify-between items-center text-xs">
      <p className="ml-16">© Atelier Jolie 2023</p>
      <div className="flex justify-around gap-12 mr-12">
        <Link href="" >Terms & Conditions</Link>
        <Link href="">Privacy policy</Link>
      </div>
    </div>
  )
}
