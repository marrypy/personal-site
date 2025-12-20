import Container from "../components/Container"

export default function Footer() {
  return (
    <footer
      style={{
        padding: "3rem 0",
        borderTop: "1px solid var(--border)",
        textAlign: "center"
      }}
    >
      <Container>
        <p className="muted" style={{ fontSize: 14 }}>
        © 2025 Marry Kassa, All Rights Reserved.        </p>
      </Container>
    </footer>
  )
}
