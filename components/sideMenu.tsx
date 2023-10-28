import { Button } from "./ui/button"
import { useState } from "react"

export default function SideMenu() {
  const [pressed, setPressed] = useState(false)
  return (
    <Button
      variant="ghost"
      onClick={() => setPressed(!pressed)}
    >
      {
        pressed ?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="25"
            fill="none"
            viewBox="0 0 42 25"
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeWidth="1.846"
              d="M10.154 1.846L32.308 24M10.154 24L32.308 1.846"
            ></path>
          </svg>
          :
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="14"
            fill="none"
            viewBox="0 0 34 14"
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeWidth="1.846"
              d="M1.461 1h31M1.461 13h31"
            ></path>
          </svg>
      }

    </Button>
  )
}
