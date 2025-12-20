import Container from "./Container"

const items = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" }
]

export default function Navbar() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(10px)",
        background: "rgba(11, 13, 16, 0.7)"
      }}
    >
      <Container>
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <a href="#home" style={{ fontWeight: 700 }}>
            MK
          </a>

          <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                style={{
                  color: "var(--muted)",
                  fontSize: 14,
                  padding: "0.4rem 0.6rem",
                  borderRadius: 10
                }}
              >
                {it.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </div>
  )
}
