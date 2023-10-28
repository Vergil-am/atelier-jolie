"use client"
import { Input } from '@/components/ui/input'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Search(params: { className?: string }) {
  const InputRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()

  function SubmitSearch(key: string) {
    if (key == "Enter" && InputRef.current != null) {
      router.push(`/patterns/all?search=${InputRef.current.value}`)
    }
  }
  return (
    <Input className={cn("bg-transparent  w-52 text-center border-b-[#A0A0A0] border-t-transparent border-x-transparent mt-32", params.className)}
      ref={InputRef}
      placeholder="Search"
      onKeyDown={(e) => { SubmitSearch(e.key) }}
    />
  )
}
