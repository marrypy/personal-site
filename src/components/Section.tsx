import { motion } from "framer-motion"
import type { ReactNode } from "react"
import Container from "./Container"

export default function Section({
  id,
  title,
  children
}: {
  id?: string
  title?: string
  children: ReactNode
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <Container>
        {title ? (
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            {title}
          </h2>
        ) : null}

        {children}
      </Container>
    </motion.section>
  )
}
