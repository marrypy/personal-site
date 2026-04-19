import { useEffect, useState } from "react"

type Props = {
  text: string
  /** ms between characters */
  speed?: number
}

export default function TypewriterName({ text, speed = 72 }: Props) {
  const [shown, setShown] = useState("")

  useEffect(() => {
    setShown("")
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setShown(text.slice(0, i))
      if (i >= text.length) {
        window.clearInterval(id)
      }
    }, speed)
    return () => window.clearInterval(id)
  }, [text, speed])

  return (
    <h1 className="hero-title">
      <span className="hero-name">{shown}</span>
      {shown.length < text.length && (
        <span className="typewriter-cursor" aria-hidden="true">
          |
        </span>
      )}
    </h1>
  )
}
