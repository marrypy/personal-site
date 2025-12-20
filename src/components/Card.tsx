import type { ReactNode } from "react"
import "./card-glow.css"

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="glow-wrapper">
      <div className="card">{children}</div>
    </div>
  )
}

