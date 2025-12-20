import type { ReactNode } from "react"

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div style={{ width: "min(1100px, 92%)", margin: "0 auto" }}>{children}</div>
  )
}
